import Find from "../views/Find"

import MyMusic from "../views/MyMusic"
import CloudVillage from "../views/CloudVillage"
import Video from "../views/Video";
import user from './user'
import Leaderboard from './Find/Leaderboard'
import LiveBroadcast from './Find/LiveBroadcast'
import Radio from './Find/Radio'
import RecommendedDaily from './Find/RecommendedDaily'
import SongList from './Find/SongList'
export default [{
        to: "/",
        path: "/",
        context: "发现",
        component: Find,
        iconName: "icon-wangyiyunyinlezizhi-copy",
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        },
        children: [
            {
                to: "/find/RecommendedDaily",
                path: "/find/RecommendedDaily",
                context: "发现",
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
                }
            }
        ],
        exact: true
    },
    {
        to: "/video",
        path: "/video",
        context: "视频",
        component: Video,
        iconName: "icon-shipin",
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/mymusic",
        path: "/mymusic",
        context: "我的",
        component: MyMusic,
        iconName: "icon-yinle",
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/cloudvillage",
        path: "/cloudvillage",
        context: "云村",
        component: CloudVillage,
        iconName: "icon-renqun",
        meta: {
            title: "",
            keyword: "",
            descrieption: ""
        }
    },
    user
]