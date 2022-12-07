import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Gallery from '../views/Gallery.vue'
import Detail from '../views/Detail.vue'


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/details/:id",
        name: "Detail",
        component: Detail,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;