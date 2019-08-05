import React from "react";
import Header from '../../components/MyMusic/Header'
import MyMusicMiddle from '../../components/MyMusic/MyMusicMiddle'
import '../../assets/css/all.css'
import '../../assets/css/MyMusic.css'

export default class MyMusic extends React.Component{
    componentWillMount() {
        //判断是否登录
    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%'}}>
                <Header></Header>
                <MyMusicMiddle></MyMusicMiddle>
                <this.MyNav></this.MyNav>
                {/*我的音乐*/}
                {/*<p>我的收藏</p>*/}
                {/*<p>我的电台</p>*/}
                {/*<p>......</p>*/}
            </div>
        )
    }
}