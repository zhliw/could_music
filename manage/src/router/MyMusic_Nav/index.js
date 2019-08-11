
import MySongList from '../../components/MyMusic/Songlist/index'
import MyFM from "../../components/MyMusic/MyFM/index"
import DjDetail from "../../components/MyMusic/MyFM/DjDetail"
import UserMessage from '../../components/MyMusic/UserMessage/index';
import SongPlay from '../../components/MyMusic/SongPlay/index'
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
        to: "/MyFM",
        path: "/MyFM",
        context: "电台",
        component: MyFM,
        meta: {
            title: "电台",
        }
    },
    {
        to: "/UserMessage",
        path: "/UserMessage",
        context: "用户信息",
        component: UserMessage,
        meta: {
            title: "用户信息",
        }
    },
    {
        to:"/DjDetail",
        path:"/DjDetail",
        context:"电台详情",
        component:DjDetail,
        meta: {
            title: "电台详情"
        }
    },
    {
        to: "/SongPlay",
        path: "/SongPlay",
        context: "歌曲播放",
        component: SongPlay,
        meta: {
            title: "歌曲播放",
        }
    }

]