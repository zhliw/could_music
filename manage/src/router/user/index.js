import User from "../../views/User"
import Message from '../../views/User/Message'
import PerforMance from '../../views/User/PerforMance'
import Skin from '../../views/User/Skin'
import Store from '../../views/User/Store'
export default {
    to:"/user",
    path:"/user",
    context:"账号",
    component:User,
    iconName:"icon-sself",
    meta:{
        title:"账号",
        keyword:"",
        descrieption:""
    },
    children:[
        {
            to:'/user/message',
            path:'/user/message',
            component:Message,
            context:'信息',
            iconName:'icon-xiaoxi'
        },
        {
            to:'/user/store',
            path:'/user/store',
            component:Store,
            context:'商城',
            iconName:'icon-shangcheng'
        },
        {
            to:'/user/perforMance',
            path:'/user/perforMance',
            component:PerforMance,
            context:'演出',
            iconName:'icon-ticket'
        },
        {
            to:'/user/skin',
            path:'/user/skin',
            component:Skin,
            context:'个性换肤',
            iconName:'icon-yifu'
        }
    ]
}