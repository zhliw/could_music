import Singer from '../../../views/Find/Search/Singer'
import Search_To from '../../../views/Find/Search/Search_To'
import User from '../../../views/Find/Search/User'
import All from '../../../views/Find/Search/All'
import AllSinger from '../../../views/Find/Search/AllSinger'
import AllSonlist from '../../../views/Find/Search/Search_To'
import AnchorRadio from '../../../views/Find/Search/AnchorRadio'
import Vedio from '../../../views/Find/Search/Vedio'
import SingleSong from '../../../views/Find/Search/SingleSong'
export default [  {
    to: "/find/Singer",
    path: "/find/Singer",
    context: "歌手分类",
    component: Singer,
    meta: {
        title: "歌手分类",
        keyword: "",
        descrieption: ""
    }
},
{
    to: "/find/Search_To",
    path: "/find/Search_To",
    context: "搜索跳转",
    component: Search_To ,
    meta: {
        title: "搜索跳转",
        keyword: "",
        descrieption: ""
    }
},
        {
            to: "/find/All",
            path: "/find/All",
            context: "综合",
            component: All,
            meta: {
                title: "综合",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/AllSinger",
            path: "/find/AllSinger",
            context: "歌手",
            component: AllSinger,
            meta: {
                title: "歌手",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/AllSonlist",
            path: "/find/AllSonlist",
            context: "歌单",
            component: AllSonlist,
            meta: {
                title: "歌单",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/AnchorRadio",
            path: "/find/AnchorRadio",
            context: "主播电台",
            component: AnchorRadio,
            meta: {
                title: "主播电台",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/User",
            path: "/find/User",
            context: "用户",
            component: User,
            meta: {
                title: "用户",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/SingleSong",
            path: "/find/SingleSong",
            context: "单曲",
            component: SingleSong,
            meta: {
                title: "单曲",
                keyword: "",
                descrieption: ""
            }
        },{
            to: "/find/Vedio",
            path: "/find/Vedio",
            context: "视频",
            component: Vedio,
            meta: {
                title: "视频",
                keyword: "",
                descrieption: ""
            }
        }
]