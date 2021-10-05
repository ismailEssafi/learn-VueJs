import {createRouter,createWebHistory} from "vue-router";
import Calendar from './pages/Calendar'
import NameList from './pages/NameList'
import Home from './pages/Home'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator.vue'
import ReuseableModal from './pages/ReuseableModal'
const routes=[
    {path:'/',component:Home},
    {path:'/calendar',component:Calendar},
    {path:'/dc-hero',component:NameList},
    {path:'/markdown',component:Markdown},
    {path:'/slider-carousel',component:Slider},
    {path:'/calculator',component:Calculator},
    {path:'/reuseable-model',component:ReuseableModal}

]

const router=createRouter({
    history: createWebHistory(),
    routes,
})

export default router;