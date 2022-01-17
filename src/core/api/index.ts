import axios, { AxiosRequestConfig } from 'axios';
import { API } from '@/config';
import { useAuthStore } from '@/modules/auth/store';
import { useAppStore } from '@/modules/app/store';

export const api = axios.create({
  baseURL: API.BASE_URL,
  timeout: API.TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// commonly these interceptor functions
// should be in separate files

api.interceptors.request.use(
  (res: AxiosRequestConfig) => {
    const { headers } = res;
    const authStore = useAuthStore();

    if (headers) {
      headers[
        'Authorization'
      ] = `${authStore.token.token_type} ${authStore.token.access_token}`;
    }

    // start loading state
    useAppStore().isLoading = true;

    return res;
  },
  (err) => {
    // stop loading state
    useAppStore().isLoading = false;
    return err;
  }
);

api.interceptors.response.use(
  (res) => {
    // stop loading state
    useAppStore().isLoading = false;
    return res;
  },
  (err) => {
    // stop loading state
    useAppStore().isLoading = false;
    return err;
  }
);
