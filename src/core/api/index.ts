import axios, { AxiosRequestConfig } from 'axios';
import { API } from '@/config';
import { useAuthStore } from '@/modules/auth/store';

export const api = axios.create({
  baseURL: API.BASE_URL,
  timeout: API.TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (res: AxiosRequestConfig) => {
    const { headers } = res;
    const authStore = useAuthStore();

    if (headers) {
      headers[
        'Authorization'
      ] = `${authStore.token.token_type} ${authStore.token.access_token}`;
    }
    return res;
  },
  (err) => err
);
