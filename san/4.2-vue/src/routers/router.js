import Vue from 'vue'
import VueRouter from 'vue-router'

//compents
import todo from '../components/Todo.vue'
Vue.use(VueRouter)
const routes = [
    { path: "/all", component: todo },
    { path: "/active", component: todo },
    { path: '/', redirect: '/all' }
]
const router = new VueRouter({
    routes
});
export default router;