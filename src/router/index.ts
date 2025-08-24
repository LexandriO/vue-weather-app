import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/main/MainPage.vue';
import WeeklyPage from '@/pages/weekly/WeeklyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainPage,
    },
    {
      name: 'weekly',
      path: '/weekly',
      component: WeeklyPage,
    },
  ],
});

export default router;
