import { createRouter, createWebHistory } from "vue-router";

import home from '../components/views/HomePage.vue';
import about from '../components/views/AboutPage.vue';
import notFound from '../components/views/NotfoundPage.vue';
import auth from '../components/auth/AuthPage.vue';
import register from '../components/auth/RegisterPage.vue';
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/:patchMatch(.*)*',
        component: notFound

    },
    {
        path: '/auth',
        component: auth
    },
    {
        path: '/register',
        component: register
    }
    
   
 
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router