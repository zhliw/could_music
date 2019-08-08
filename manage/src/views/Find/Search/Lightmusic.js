import React from "react";
export default class Lightmusic extends React.Component{
    componentDidMount(){
        this.getSonlist()
    }
    async getSonlist(){
        // 获取歌单广场所有推荐的歌单
        const data=await this.axios('/user/playlist?uid=32953014')
        console.log(data)
    }
    render(){
        return(
            <div>轻音乐</div>
        )
    }
}