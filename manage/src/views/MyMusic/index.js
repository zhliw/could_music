import React from "react";
import Header from '../../components/MyMusic/Header'
import MyMusicMiddle from '../../components/MyMusic/MyMusicMiddle'
import '../../assets/css/all.css'
import '../../assets/css/MyMusic.css'
 import {
    withRouter
 } from 'react-router-dom'
class MyMusic extends React.Component{
    componentWillMount() {
        //判断是否登录
        if(!localStorage.userInfo)
            this.props.history.push('/user/login')
    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%'}}>
                <Header></Header>
                <MyMusicMiddle></MyMusicMiddle>
                <this.MyNav></this.MyNav>
            </div>
        )
    }
}
export default withRouter(MyMusic)