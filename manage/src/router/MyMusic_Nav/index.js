import MySongList from '../../components/MyMusic/Songlist/index';
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
        to: "/UserMessage",
        path: "/UserMessage",
        context: "用户信息",
        component: UserMessage,
        meta: {
            title: "用户信息",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/SongPlay",
        path: "/SongPlay",
        context: "歌曲播放",
        component: SongPlay,
        meta: {
            title: "歌曲播放",
            keyword: "",
            descrieption: ""
        }
    }
]