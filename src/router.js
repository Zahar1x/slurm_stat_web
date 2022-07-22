import Router from "vue-router"
import Vue from "vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./views/Home")
        },
        {
            path: "/load",
            name: "Load",
            component: () => import("./views/Load")
        },
        {
            path: "/downtime",
            name: "Downtime",
            component: () => import("./views/Downtime")
        },
        {
            path: "/failures",
            name: "Failures",
            component: () => import("./views/Failure")
        },
        {
            path: "/work",
            name: "Work",
            component: () => import("./views/Work")
        }
    ]
})