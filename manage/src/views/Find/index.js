import React from "react";
import {withRouter} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
 class Find extends React.Component{
//为了打包不出错
    componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
       slidesPerView : 3,
       spaceBetween : 20,
    })
}
    render(){
        return(
            //导航栏
            <div>
                <this.MyNav></this.MyNav>
            <header>
                <span onClick={()=>{
                    this.props.history.push('/find/Identification')
                }}className={'icon-huatong iconfont'}></span>
                <input type="text" placeholder='大家都在搜 陈奕迅' onClick={()=>{
                    this.props.history.push('/find/Search')
                }}/>
                <span onClick={()=>{
                    this.props.history.push('/find/Play')
                }} className={'icon-yinle1 iconfont'}></span>
            </header>

            <div className="myFindBanner">
                <div className="swiper-container">
                     <div className="swiper-wrapper">
                     <div className="swiper-slide"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4207454357,583169735&fm=27&gp=0.jpg" alt=""/></div>
                    <div className="swiper-slide"><img src="https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=d0235e53a2ec8a13144f5fe6cf33bdb7/0824ab18972bd407b2f5a94170899e510fb3095f.jpg" alt=""/></div>
                    <div className="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1564805152&di=52eaa9e0a16a064dc645e8145c9427cf&src=http://img44.ownskin.com/powertheme/big/1/ptv06rd6.gif" alt=""/></div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
            </div>
            </div>
                <div className='myFindNav_wn'>

                <div onClick={()=>{
                    this.props.history.push('/find/RecommendedDaily')
                }}>
                      <i className={'icon-xinbaniconshangchuan- iconfont'}></i>
                      <p>每日推荐</p> 
                      </div> 
                  <div onClick={()=>{
                    this.props.history.push('/find/SongList')
                  }}>
                      <i className={'icon-gedan iconfont'}></i>
                      <p>歌单</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/Leaderboard')
                  }}>
                      <i className={'icon-paixingbang iconfont'}></i>
                      <p>排行榜</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/Radio')
                  }}>
                      <i className={'icon-xianxing_diantai iconfont'}></i>
                      <p>电台</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/LiveBroadcast')
                  }}>
                      <i className={'icon-zhibo- iconfont'}></i>
                      <p>直播</p>
                      </div>
                </div>
                 <hr />
            </div>
        )
    }
}
export default withRouter(Find)