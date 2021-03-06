import { TestConfiguration } from '../../../../__tests__/configuration';
import { IlandBrowserAuthProvider } from '../browser-auth-provider';
import { MockKeycloak } from '../__mocks__/mock-keycloak-instance';

const mockKeycloak = MockKeycloak;

jest.mock('keycloak-js', () => {
  return () => {
    return new mockKeycloak();
  };
});

test('IlandBrowserAuthProvider can retrieve token', async() => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(async function(token) {
    expect(token).toBe('fake-auth-token-1');
    return auth.getAuthenticatedUsername().then(async(preferredUsername) => {
      expect(preferredUsername).toBe('csnyder');
      return auth.logout();
    });
  });
});

test('IlandBrowserAuthProvider can retrieve a token observable', (done) => {
  expect.assertions(3);
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  let tokenUpdated = false;
  auth.getTokenObservable().subscribe(token => {
    if (!tokenUpdated) {
      expect(token).toEqual('fake-auth-token-1');
    } else {
      expect(token).toEqual('fake-auth-token-2');
      done();
    }
  });
  // Faking a token update.
  setTimeout(() => {
    tokenUpdated = true;
    auth.getToken().then(token => {
      expect(token).toEqual('fake-auth-token-2');
    }).catch(() => {
      done();
    });
  }, 1000);
});

test('IlandBrowserAuthProvider can retrieve token synchronously', async() => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(() => {
    expect(auth.getTokenSync()).toBe('fake-auth-token-1');
  });
});

test('IlandBrowserAuthProvider can retrieve impersonated token synchronously', async() => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  auth.testRole('ROLE_UUID');
  return auth.getToken().then(() => {
    expect(auth.getTokenSync()).toBe('impersonate=ROLE_UUID;fake-auth-token-1');
    auth.endRoleTest();
    expect(auth.getTokenSync()).toBe('fake-auth-token-1');
  });
});
