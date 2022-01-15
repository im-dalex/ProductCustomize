import { ApiModel } from '@/core/api/api.interface';

const { BASE_URL, VUE_APP_API_BASE_URL } = process.env;

const API: ApiModel = {
  BASE_URL: VUE_APP_API_BASE_URL,
  TIMEOUT: 30000,
};

export { BASE_URL, API };
