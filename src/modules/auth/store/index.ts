import { defineStore } from 'pinia';
import { getToken } from '@/modules/auth/auth.service';
import { APP } from '@/config';
import { Token } from '../models/auth.interface';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: {} as Token,
  }),
  getters: {
    isAuthenticated: (state): boolean => {
      return state.token.access_token?.length > 0;
    },
  },
  actions: {
    async login() {
      const { VUE_APP_API_USERNAME: username, VUE_APP_API_PASSWORD: password } =
        process.env;
      const user = new URLSearchParams();
      user.append('username', username);
      user.append('password', password);
      user.append('grant_type', APP.GRANT_TYPE);
      user.append('client_id', APP.CLIENT_ID);

      const token = await getToken(user);
      this.token = token;
    },
  },
});
