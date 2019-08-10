import MySongList from '../../components/MyMusic/Songlist/index'
import MyFM from "../../components/MyMusic/MyFM/index"
import DjDetail from "../../components/MyMusic/MyFM/DjDetail"
export default [
    {
        to: "/MySonglist",
        path: "/MySongList",
        context: "歌单",
        component: MySongList,
        meta: {
            title: "歌单",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to:"/MyFM",
        path:"/MyFM",
        context:"电台",
        component:MyFM,
        meta: {
            title: "电台",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to:"/DjDetail",
        path:"/DjDetail",
        context:"电台详情",
        component:DjDetail,
        meta: {
            title: "电台详情",
            keyword: "",
            descrieption: ""
        }
    }

]