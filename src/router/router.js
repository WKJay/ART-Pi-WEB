import {createRouter,createWebHashHistory} from 'vue-router';

import homePage from '@/components/home'
import plugins from '@/components/applications/plugins'

const routes = [
    {path: "",redirect: "/home"},
    {path: "/home",component: homePage},
    {path:"/plugins",component:plugins}
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;