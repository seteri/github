import { createRouter,createWebHistory } from 'vue-router'


const Home = () => import("../views/Home.vue")
const Movies = () => import("../views/Movies.vue")
const Tvshows = () => import("../views/Tvshows.vue")
const Player =  () => import("../views/Player.vue")
const Info =  () => import("../views/Info.vue")






const routes = [
    {path: '/', component: Home},
    {path: '/movies', component: Movies},
    {path: '/tvshows', component: Tvshows},
    {path: '/player', component: Player },
    {path: '/info/:id',name: 'info', component: Info}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;