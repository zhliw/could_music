//Find组件信息
import Leaderboard from '../../views/Find/indexComponent/Leaderboard'
import LiveBroadcast from '../../views/Find/indexComponent/LiveBroadcast'
import Radio from '../../views/Find/indexComponent/Radio'
import RecommendedDaily from '../../views/Find/indexComponent/RecommendedDaily'
import SongList from '../../views/Find/indexComponent/SongList'
import Identification from '../../views/Find/indexComponent/Identification'
import Play from '../../views/Find/indexComponent/Play'
import Search from '../../views/Find/indexComponent/Search'
import SonCompotent from'./SonComponent'
export default[
    {
        to: "/find/Identification",
        path: "/find/Identification",
        context: "听歌识曲",
        component: Identification,
        meta: {
            title: "听歌识曲",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/Play",
        path: "/find/Play",
        context: "正在播放",
        component: Play,
        meta: {
            title: "正在播放",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/Search",
        path: "/find/Search",
        context: "搜索",
        component: Search,
        meta: {
            title: "搜索",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/RecommendedDaily",
        path: "/find/RecommendedDaily",
        context: "每日推荐",
        component: RecommendedDaily,
        meta: {
            title: "每日推荐",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/Leaderboard",
        path: "/find/Leaderboard",
        context: "排行榜",
        component: Leaderboard,
        meta: {
            title: "排行榜",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/Radio",
        path: "/find/Radio",
        context: "电台",
        component: Radio,
        meta: {
            title: "电台",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/SongList",
        path: "/find/SongList",
        context: "歌单",
        component: SongList,
        meta: {
            title: "歌单",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/find/LiveBroadcast",
        path: "/find/LiveBroadcast",
        context: "直播",
        component: LiveBroadcast,
        meta: {
            title: "直播",
            keyword: "",
            descrieption: ""
        },
    exact: true
},
...SonCompotent
]
