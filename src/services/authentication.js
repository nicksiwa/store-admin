import service from './config';
import { SERVICE_ROUTE } from '../constants';

export const loginService = data => {
  return service.post(SERVICE_ROUTE.AUTH.LOGIN, data);
}
