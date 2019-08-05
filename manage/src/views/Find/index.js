import React from "react";
import {withRouter} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
 class Find extends React.Component{
//为了打包不出错
    componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
       slidesPerView : 1,
       spaceBetween : 20,
    })
}
    render(){
        getBanner(){
            
        }
        return(
            //导航栏
            <div>
                <this.MyNav></this.MyNav>
            <header>
                <span style={{fontSize:'0.48rem'}} onClick={()=>{
                    this.props.history.push('/find/Identification')
                }}className={'icon-huatong iconfont'}></span>
                <input type="text" placeholder='大家都在搜 陈奕迅' className={'serachIndex_wn'}onClick={()=>{
                    this.props.history.push('/find/Search')
                }}/>
                <span style={{fontSize:'0.48rem'}} onClick={()=>{
                    this.props.history.push('/find/Play')
                }} className={'icon-yinle1 iconfont'}></span>
            </header>
                        <div className="myFindBanner">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="http://img3.imgtn.bdimg.com/it/u=1534088717,1570001692&fm=26&gp=0.jpg" alt=""/></div>
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
                      <span className={'navIconCircle_wn'} >
                          <i className={'icon-xinbaniconshangchuan- iconfont'}></i>
                      </span>
                      <p>每日推荐</p> 
                      </div> 
                  <div onClick={()=>{
                    this.props.history.push('/find/SongList')
                  }}>
                      <span className={'navIconCircle_wn'} >
                      <i className={'icon-gedan iconfont'}></i>
                      </span>
                      <p>歌单</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/Leaderboard')
                  }}>
                      <span className={'navIconCircle_wn'} >
                      <i className={'icon-paixingbang iconfont'}></i>
                      </span>
                      <p>排行榜</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/Radio')
                  }}>
                      <span className={'navIconCircle_wn'} >
                      <i className={'icon-xianxing_diantai iconfont'}></i>
                      </span>
                      <p>电台</p>
                      </div>
                  <div onClick={()=>{
                    this.props.history.push('/find/LiveBroadcast')
                  }}>
                      <span className={'navIconCircle_wn'} >
                      <i className={'icon-zhibo- iconfont'}></i>
                      </span>
                      <p>直播</p>
                      </div>
                </div>
                 <div className='line_wn'></div>
                 <div className='songList'>
                     <div className='sonList_wn'>
                         <span>推荐歌单</span>
                         <span>歌单广场</span>
                     </div>
                         <div>
                             <span>一个歌单块</span>
                             <span>2个歌单块</span>
                             <span>3个歌单块</span>
                        </div>
                        <div>
                             <span>4个歌单块</span>
                             <span>5个歌单块</span>
                             <span>6个歌单块</span>
                        </div>
                 </div>

                <hr/>
                 <div className='newDish'>
                     <div className='newDish_wn'>
                         <span>新碟</span><span>新歌</span>
                         <span>更多新碟</span>
                     </div>
                         <div>
                             <span>一个歌单块</span>
                             <span>2个歌单块</span>
                             <span>3个歌单块</span>
                        </div>
                 </div>
                 <hr />
                 <div>
                     云村精选
                 </div>
            </div>
        )
    }
}
export default withRouter(Find)