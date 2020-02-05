import service from './config';
import { SERVICE_ROUTE } from '../constants';

export const getAllTagService = () => {
  return service.get(SERVICE_ROUTE.TAG.INDEX);
}

export const createTagService = name => {
  return service.post(SERVICE_ROUTE.TAG.INDEX, name);
}

export const deleteTagService = id => {
  return service.delete(`${SERVICE_ROUTE.TAG.INDEX}/${id}`);
}
