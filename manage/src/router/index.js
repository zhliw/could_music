//MyNav
import Find from "../views/Find"
import User from "../views/User"
import MyMusic from "../views/MyMusic"
import CloudVillage from "../views/CloudVillage"
import Video from "../views/Video";

import CloudVillageVideo from '../views/CloudVillage/Video';

//FindNav
import Find_Nav from './Find_Nav';

//MyMusic
import MyMusicNav from './MyMusic_Nav'
//User
/*-------------------------------Video---------------------------------------------*/
/*------------------------------Find------------------------------------------*/

/*-----------------------------------User----------------------------------*/
import Message from '../views/User/Message'
import PerforMance from '../views/User/PerforMance'
import Skin from '../views/User/Skin'
import Store from '../views/User/Store'
import Login from '../views/User/Login'
import PhoneLogin from '../views/User/PhoneLogin'
import UserPassWord from '../views/User/UserPassWord'
import UpPassWord from '../views/User/UpPassWord'
import Code from '../views/User/Code'
export default [
    {
        to: "/",
        path: "/",
        context: "发现",
        component: Find,
        exact: true,
        iconName: "icon-wangyiyunyinlezizhi-copy",
        isShow: true,
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/video/",
        path: "/video/",
        context: "视频",
        component: Video,
        iconName: "icon-shipin",
        isShow: true,
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        },
        children:[
            {
                to:'/video/',
                path:"/video/",
                component:"",
                exact:true,
                content:"说唱"
            },
            {
                to:'/video/3109',
                path:"/video/3109",
                content:"街舞"
            },
            {
                to:'/video/11106',
                path:"/video/11106",
                content:"热血动漫"
            },
            {
                to:'/video/26141',
                path:"/video/26141",
                content:"广告"
            },
            {
                to:'/video/58100',
                path:"/video/58100",
                content:"现场"
            },
            {
                to:'/video/60100',
                path:"/video/60100",
                content:"翻唱"
            },
            {
                to:'/video/1000',
                path:"/video/1000",
                content:"MV"
            },
            {
                to:'/video/1101',
                path:"/video/1101",
                content:"舞蹈"
            },
            {
                to:'/video/57104',
                path:"/video/57104",
                content:"ACG音乐"
            },
            {
                to:'/video/58101',
                path:"/video/58101",
                content:"听BGM"
            }
        ]
    },
    {
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
    },
    {
        to:"/cloudvillage",
        path:"/cloudvillage",
        context:"云村",
        component:CloudVillage,
        iconName:"icon-renqun",
        isShow:true,
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    {
        path:"/village/video/:id",
        context:"云村视频",
        component:CloudVillageVideo,
        isShow:false,
        iconName:"icon-renqun",
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to:"/user",
        path:"/user",
        context:"账号",
        component:User,
        iconName:"icon-sself",
        isShow:true,
        exact:true,
        meta:{
            title:"账号",
            keyword:"",
            descrieption:""
        },
    },
    {
        to:'/user/message',
        path:'/user/message',
        component:Message,
        context:'信息',
        iconName:'icon-xiaoxi',
    },
    {
        to: '/user/store',
        path: '/user/store',
        component: Store,
        context: '商城',
        iconName: 'icon-shangcheng'
    },
    {
        to: '/user/perforMance',
        path: '/user/perforMance',
        component: PerforMance,
        context: '演出',
        iconName: 'icon-ticket'
    },
    {
        to:'/user/skin',
        path:'/user/skin',
        component:Skin,
        context:'个性换肤',
        iconName:'icon-yifu'
    },
    {
        to:'/user/login',
        path:'/user/login',
        component:Login,
    },
    {
        to:'/user/phonelogin',
        path:'/user/phonelogin',
        component:PhoneLogin,
    },
    {
        to:'/user/userPassWord',
        path:'/user/userPassWord',
        component:UserPassWord,
    },
    {
        to:'/user/uppassword',
        path:'/user/uppassword',
        component:UpPassWord,
    },
    {
        to:'/user/code',
        path:'/user/code',
        component:Code,
    },
    ...Find_Nav,
    ...MyMusicNav
]