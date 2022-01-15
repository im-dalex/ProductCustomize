import { useAuthStore } from '@/modules/auth/store';
import { Router } from 'vue-router';

export const applyGuards = (router: Router): void => {
  router.beforeEach(async (to, _, next) => {
    const authStore = useAuthStore();
    if (to.meta.authorization && !authStore.isAuthenticated) {
      await authStore.login();
    }
    console.log(to);
    return next();
  });
};
