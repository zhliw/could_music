//MyNav
import Find from "../views/Find"
import User from "../views/User"
import MyMusic from "../views/MyMusic"
import CloudVillage from "../views/CloudVillage"
import Video from "../views/Video";
//FindNav
import Find_Nav from './Find_Nav'
//User
import Message from '../views/User/Message'
import PerforMance from '../views/User/PerforMance'
import Skin from '../views/User/Skin'
import Store from '../views/User/Store'
export default [{
        to: "/",
        path: "/",
        context: "发现",
        component: Find,
        exact:true,
        iconName: "icon-wangyiyunyinlezizhi-copy",
        isShow: true,
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    
{
    to: "/video",
    path: "/video",
    context: "视频",
    component: Video,
    iconName: "icon-shipin",
    isShow: true,
    meta: {
        title: "",
        keyword: "",
        descrieption: ""
    }
}, {
    to: "/mymusic",
    path: "/mymusic",
    context: "我的",
    component: MyMusic,
    iconName: "icon-yinle",
    isShow: true,
    meta: {
        title: "",
        keyword: "",
        descrieption: ""
    }
}, {
    to: "/cloudvillage",
    path: "/cloudvillage",
    context: "云村",
    component: CloudVillage,
    iconName: "icon-renqun",
    isShow: true,
    meta: {
        title: "",
        keyword: "",
        descrieption: ""
    }
}, {
    to: "/user",
    path: "/user",
    context: "账号",
    component: User,
    iconName: "icon-sself",
    isShow: true,
    meta: {
        title: "账号",
        keyword: "",
        descrieption: ""
    },
}, {
    to: '/user/message',
    path: '/user/message',
    component: Message,
    context: '信息',
    iconName: 'icon-xiaoxi',

}, {
    to: '/user/store',
    path: '/user/store',
    component: Store,
    context: '商城',
    iconName: 'icon-shangcheng'
}, {
    to: '/user/perforMance',
    path: '/user/perforMance',
    component: PerforMance,
    context: '演出',
    iconName: 'icon-ticket'
}, {
    to: '/user/skin',
    path: '/user/skin',
    component: Skin,
    context: '个性换肤',
    iconName: 'icon-yifu'
},
...Find_Nav
]