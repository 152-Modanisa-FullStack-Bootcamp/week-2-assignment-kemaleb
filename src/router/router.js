import Vue from "vue";
import VueRouter from "vue-router";
import ProductListingPage from "@/views/ProductListingPage"
import FavoritesPage from "@/views/FavoritesPage"
import WatchPage from "@/views/WatchPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes:[
        {path: "/", component: ProductListingPage},
        {path: "/favorites/:userid", component: FavoritesPage},
        {path: "/watchpage", component: WatchPage }
    ]
});

export default router;