import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/AuthStore'

const routes = [
    {
        path: '/',
        name: 'Library',
        component: () => import('@/views/Library.vue'),
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
        meta: {
            layout: 'auth',
            auth: false
        }
    },
    {
        path: '/reg',
        name: 'Reg',
        component: () => import('@/views/Registration.vue'),
        meta: {
            layout: 'auth',
            auth: false
        }
    },
    {
        path: '/:CatchAll(.*)',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
        meta: {
            layout: 'auth',
            auth: false
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const mustAuth = to.meta.auth

    if (mustAuth && authStore.isAuth) {
        next()
    } else if (mustAuth && !authStore.isAuth) {
        next('auth')
    } else if (!mustAuth && authStore.isAuth) {
        next(from.path)
    } else {
        next()
    }
})

export default router