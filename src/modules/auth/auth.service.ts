import { api } from '@/core/api';
import { Token } from './models/auth.interface';

const CONTROLLER = 'api/token';

export const getToken = (user: URLSearchParams): Promise<Token> =>
  api
    .post(`${CONTROLLER}`, user, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(({ data }) => data);
