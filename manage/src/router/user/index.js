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
            component:Message
        },
        {
            to:'/user/perforMance',
            path:'/user/perforMance',
            component:PerforMance
        },
        {
            to:'/user/skin',
            path:'/user/skin',
            component:Skin
        },
        {
            to:'/user/store',
            path:'/user/store',
            component:Store
        }
    ]
}