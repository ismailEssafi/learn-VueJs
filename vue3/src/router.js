import {createRouter,createWebHistory} from "vue-router";
import Calendar from './pages/Calendar'
import NameList from './pages/NameList'
import Home from './pages/Home'
import Markdown from './pages/Markdown'

const routes=[
    {path:'/',component:Home},
    {path:'/calendar',component:Calendar},
    {path:'/dc-hero',component:NameList},
    {path:'/markdown',component:Markdown}
]

const router=createRouter({
    history: createWebHistory(),
    routes,
})

export default router;