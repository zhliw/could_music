import Find from "../views/Find"

import MyMusic from "../views/MyMusic"
import CloudVillage from "../views/CloudVillage"
import Video from "../views/Video";
import user from './user'
export default [
    {
        to:"/",
        path:"/",
        context:"发现",
        component:Find,
        iconName:"icon-wangyiyunyinlezizhi-copy",
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        },
        exact:true
    },
    {
        to:"/video",
        path:"/video",
        context:"视频",
        component:Video,
        iconName:"icon-shipin",
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    },
    {
        to:"/mymusic",
        path:"/mymusic",
        context:"我的",
        component:MyMusic,
        iconName:"icon-yinle",
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    },
    {
        to:"/cloudvillage",
        path:"/cloudvillage",
        context:"云村",
        component:CloudVillage,
        iconName:"icon-renqun",
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    },
    user
]