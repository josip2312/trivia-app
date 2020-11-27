import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},
	{
		path: '/categories',
		name: 'ChooseCategory',

		component: () =>
			import(
				/* webpackChunkName: "about" */ '../views/ChooseCategory.vue'
			),
	},
	{
		path: '/categories/id=:id/difficulty=:difficulty/questions=:questions',
		props: true,
		name: 'Game',

		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Game.vue'),
	},
	{
		path: '/about',
		name: 'About',

		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
