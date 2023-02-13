import { createRouter,createWebHistory } from 'vue-router'


const Home = () => import("../views/Home.vue")
const Movies = () => import("../views/Movies.vue")
const Player =  () => import("../views/Player.vue")
const ImageInfo =  () => import("../views/Info.vue")

const routes = [
    {path: '/', component: Home},
    {path: '/movies', component: Movies},
    {path: '/player', component: Player },
    {path: '/image-info/:index',name: 'ImageInfo', component: ImageInfo}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;