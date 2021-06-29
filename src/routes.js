import VueRouter from "vue-router";
import Home from "./components/Home";
import B from "./components/B";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/b",
        component: B,
        nama: "b"
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;