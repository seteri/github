import { createRouter,createWebHistory } from 'vue-router'


const Home = () => import("../views/Home.vue")
const Movies = () => import("../views/Movies.vue")
const Tvshows = () => import("../views/Tvshows.vue")





const routes = [
    {path: '/', component: Home},
    {path: '/movies', component: Movies},
    {path: '/tvshows', component: Tvshows},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;