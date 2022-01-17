import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  persist: false,
  state: () => ({
    isLoading: false,
  }),
});
