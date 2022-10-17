import {createRouter, createWebHistory} from 'vue-router'
import TasklistAbout from '../views/TasklistAbout'
import TasklistHome from '../views/TasklistHome'


const routes = [
    {
        path: '/about',
        name: 'TasklistAbout',
        component: TasklistAbout
    },
    {
        path: '/',
        name: 'TasklistHome',
        component: TasklistHome
    }
]
    
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router