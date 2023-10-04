import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Library',
        component: () => import('@/views/Library.vue')
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active',
    linkExactActiveClass: 'active'
})

export default router