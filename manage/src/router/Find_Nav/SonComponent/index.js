import Singer from '../../../views/Find/Search/Singer'
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
}]