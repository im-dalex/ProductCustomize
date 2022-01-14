import { Router } from "vue-router";

export const applyGuards = (router: Router): void => {
  router.beforeEach(async (to, _, next) => {
    // TO DO: verify if the user is authenticated
    // if not refresh token
    return next();
  });
};
