import { AxiosResponse } from 'axios';
import { ScreenTicketJson } from '../../../model/json/screen-ticket';

export const MockScreenTicketJson: ScreenTicketJson = {
  vm_id: 'vm-id',
  ticket: 'ticket-data',
  host: 'vcd-console-host',
  ssl_thumbprint: 'ssl-thumbprint-data'
};

export const MockVmScreenTicketResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockScreenTicketJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
