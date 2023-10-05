import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Library',
        component: () => import('@/views/Library.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
        meta: {
            layout: 'auth'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active',
    linkExactActiveClass: 'active'
})

export default router