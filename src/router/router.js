import {createRouter,createWebHashHistory} from 'vue-router';

import homePage from '@/components/home'

const routes = [
    {path: "",redirect: "/home"},
    {path: "/home",component: homePage}
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;