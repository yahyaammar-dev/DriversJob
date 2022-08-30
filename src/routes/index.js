import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "Root",
        component: () => import("../components/general/Register.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router