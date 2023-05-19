import { ResetReqDto, ForgotReqDto } from './dto';
import client from 'common/utilities/client';

export const reset = (data: ResetReqDto) => {
  return client.post('/auth/reset', data);
};
export const forgot = (data: ForgotReqDto) => {
  return client.post('/auth/forgot', data);
};
