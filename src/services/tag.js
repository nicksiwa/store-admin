import service from './config';
import { SERVICE_ROUTE } from '../constants';

export const getAllTagService = () => {
  return service.get(SERVICE_ROUTE.TAG.INDEX);
}
