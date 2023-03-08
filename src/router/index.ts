import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LeagueView from '../views/LeagueView.vue';
import LeagueHistory from '../components/LeagueHistory.vue';
import LeagueOverview from '../components/LeagueOverview.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/league/:leagueName',
			component: LeagueView,
			props: true,
			children: [
				{
					name: 'leagueOverview',
					path: '',
					component: LeagueOverview,
					props: true,
				},
				{
					path: '/league/:leagueName/history',
					name: 'leagueHistory',
					component: LeagueHistory,
					props: true,
				},
			],
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
	],
});

export default router;
