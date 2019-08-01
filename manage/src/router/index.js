import Find from "../views/Find"
import My from "../views/My"
import MyMusic from "../views/MyMusic"
import CloudVillage from "../views/CloudVillage"
export default [
    {
        to:"/",
        path:"/",
        context:"Find",
        component:Find,
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        },
        exact:true
    },
    {
        to:"/mymusic",
        path:"/mymusic",
        context:"MyMusic",
        component:MyMusic,
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    },
    {
        to:"/cloudvillage",
        path:"/cloudvillage",
        context:"CloudVillage",
        component:CloudVillage,
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    },
    {
        to:"/my",
        path:"/my",
        context:"My",
        component:My,
        meta:{
            title:"",
            keyword:"",
            descrieption:""
        }
    }
]