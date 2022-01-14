import { api } from '@/core/api';
import { AuthUser, Token } from '@/modules/auth/models/auth.interface';
import { AxiosRequestConfig } from 'axios';

const CONTROLLER = 'api/token';

export const getToken = (user: AxiosRequestConfig<AuthUser>): Promise<Token> =>
  api.post(`${CONTROLLER}`, user, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
