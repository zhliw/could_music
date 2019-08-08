//Find组件信息
import Leaderboard from '../../views/Find/indexComponent/Leaderboard'
import LiveBroadcast from '../../views/Find/indexComponent/LiveBroadcast'
import Radio from '../../views/Find/indexComponent/Radio'
import RecommendedDaily from '../../views/Find/indexComponent/RecommendedDaily'
import SongList from '../../views/Find/indexComponent/SongList'
import Identification from '../../views/Find/indexComponent/Identification'
import Play from '../../views/Find/indexComponent/Play'
import Search from '../../views/Find/indexComponent/Search'
import Search_To from '../../views/Find/Search/Search_To'
//二极路由
import Singer from '../../views/Find/Search/Singer'
import Users from '../../views/Find/Search/Users'
import All from '../../views/Find/Search/All'
import AllSinger from '../../views/Find/Search/AllSinger'
import AllSonglist from '../../views/Find/Search/AllSonglist'
import AnchorRadio from '../../views/Find/Search/AnchorRadio'
import Album from '../../views/Find/Search/Album'
import Vedio from '../../views/Find/Search/Vedio'
import SingleSong from '../../views/Find/Search/SingleSong'
//歌单二极路由
import RecommendSongList from '../../views/Find/Search/RecommendSongList'
import Official from '../../views/Find/Search/Official'
import Best from '../../views/Find/Search/Best'
import America from '../../views/Find/Search/America'
import Electronic from '../../views/Find/Search/Electronic'
import Lightmusic from '../../views/Find/Search/Lightmusic'
import Rock from '../../views/Find/Search/Rock'
import Ballad from '../../views/Find/Search/Ballad'
//歌单详细内容
import Song from '../../views/Find/Search/Song'

export default [{
        to: "/Identification",
        path: "/Identification",
        context: "听歌识曲",
        component: Identification,
        meta: {
            title: "听歌识曲",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Play",
        path: "/Play",
        context: "正在播放",
        component: Play,
        meta: {
            title: "正在播放",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Search",
        path: "/Search",
        context: "搜索",
        component: Search,
        exact: true,
        meta: {
            title: "搜索",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Singer",
        path: "/Singer",
        context: "歌手分类",
        component: Singer,
        meta: {
            title: "歌手分类",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Search_To",
        path: "/Search_To",
        context: "搜索跳转",
        component: Search_To,
        meta: {
            title: "搜索跳转",
            keyword: "",
            descrieption: ""
        },
        children: [

            {
                to: "/Search_To/All",
                path: "/Search_To/All",
                context: "综合",
                component: All,
                meta: {
                    title: "综合",
                    keyword: "",
                    descrieption: ""
                }
            }, 
            {
                to: "/Search_To/SingleSong",
                path: "/Search_To/SingleSong",
                context: "单曲",
                component: SingleSong,
                meta: {
                    title: "单曲",
                    keyword: "",
                    descrieption: ""
                }
            },
              {
                to: "/Search_To/Vedio",
                path: "/Search_To/Vedio",
                context: "视频",
                component: Vedio,
                meta: {
                    title: "视频",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/Search_To/AllSinger",
                path: "/Search_To/AllSinger",
                context: "歌手",
                component: AllSinger,
                meta: {
                    title: "歌手",
                    keyword: "",
                    descrieption: ""
                }
            }, 
            {
                to: "/Search_To/Album",
                path: "/Search_To/Album",
                context: "专辑",
                component: Album,
                meta: {
                    title: "专辑",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/Search_To/AllSonglist",
                path: "/Search_To/AllSonglist",
                context: "歌单",
                component: AllSonglist,
                meta: {
                    title: "歌单",
                    keyword: "",
                    descrieption: ""
                }
            }, {
                to: "/Search_To/AnchorRadio",
                path: "/Search_To/AnchorRadio",
                context: "主播电台",
                component: AnchorRadio,
                meta: {
                    title: "主播电台",
                    keyword: "",
                    descrieption: ""
                }
            }, {
                to: "/Search_To/Users",
                path: "/Search_To/Users",
                context: "用户",
                component: Users,
                meta: {
                    title: "用户",
                    keyword: "",
                    descrieption: ""
                }
            }
        ]
    },
    {
        to: "/RecommendedDaily",
        path: "/RecommendedDaily",
        context: "每日推荐",
        component: RecommendedDaily,
        meta: {
            title: "每日推荐",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Leaderboard",
        path: "/Leaderboard",
        context: "排行榜",
        component: Leaderboard,
        meta: {
            title: "排行榜",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/Radio",
        path: "/Radio",
        context: "电台",
        component: Radio,
        meta: {
            title: "电台",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/SongList",
        path: "/SongList",
        context: "歌单",
        component: SongList,
        meta: {
            title: "歌单",
            keyword: "",
            descrieption: ""
        },
        children:[
            {
                to: "/SongList/RecommendSongList",
                path: "/SongList/RecommendSongList",
                context: "推荐",
                component: RecommendSongList,
                meta: {
                    title: "推荐",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Official",
                path: "/SongList/Official",
                context: "官方",
                component: Official,
                meta: {
                    title: "官方",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Best",
                path: "/SongList/Best",
                context: "精品",
                component: Best,
                meta: {
                    title: "精品",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/America",
                path: "/SongList/America",
                context: "欧美",
                component: America,
                meta: {
                    title: "欧美",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Electronic",
                path: "/SongList/Electronic",
                context: "电子",
                component: Electronic,
                meta: {
                    title: "电子",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Lightmusic",
                path: "/SongList/Lightmusic",
                context: "轻音乐",
                component: Lightmusic,
                meta: {
                    title: "轻音乐",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Rock",
                path: "/SongList/Rock",
                context: "摇滚",
                component: Rock,
                meta: {
                    title: "摇滚",
                    keyword: "",
                    descrieption: ""
                }
            },
            {
                to: "/SongList/Ballad",
                path: "/SongList/Ballad",
                context: "民谣",
                component: Ballad,
                meta: {
                    title: "民谣",
                    keyword: "",
                    descrieption: ""
                }
            }
        ]
    },
    {
        to: "/Song",
        path: "/Song",
        context: "歌单详细内容",
        component: Song,
        exact: true,
        meta: {
            title: "歌单详细内容",
            keyword: "",
            descrieption: ""
        }
    },
    {
        to: "/LiveBroadcast",
        path: "/LiveBroadcast",
        context: "直播",
        component: LiveBroadcast,
        meta: {
            title: "直播",
            keyword: "",
            descrieption: ""
        },
        exact: true
    }
]