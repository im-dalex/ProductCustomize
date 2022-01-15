import { useAuthStore } from '@/modules/auth/store';
import { Router } from 'vue-router';

export const applyGuards = (router: Router): void => {
  router.beforeEach(async (to, _, next) => {
    const authStore = useAuthStore();
    // TO DO: verify if the user is authenticated
    // if not refresh token
    if (!authStore.isAuthenticated) {
      await authStore.login();
    }
    return next();
  });
};
