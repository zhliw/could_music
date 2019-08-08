import React from "react";
import { withRouter } from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import '../../assets/css/Find/find.css'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
class Find extends React.Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            sixsonglist: []
        }
    }
    //为了打包不出错
    componentDidMount() {
        //轮播图调用
        this.getBanner();
        //歌单
        this.getSonglist();


    }
    getBanner() {
        this.axios.get('/banner').then(data => {
            console.log(data)
            this.setState({
                banner: data.banners

            }, () => {
                new Swiper('.swiper-container', {
                    observer: true,
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',//这里是分页器设置
                    },

                })
            })

        })
    }
    //歌单
    async getSonglist() {
        const data = await this.axios('/personalized')
        // console.log(data)
        this.setState({
            sixsonglist: data.result.slice(0,6)
        })
        console.log(this.state.sixsonglist)
    }
    render() {
        return (
            //导航栏
            <div>
                <this.MyNav></this.MyNav>
                <header>
                    <span style={{ fontSize: '0.48rem' }} onClick={() => {
                        this.props.history.push('/Identification')
                    }} className={'icon-huatong iconfont'}></span>
                    <input type="text" placeholder='大家都在搜 陈奕迅' className={'serachIndex_wn'} onClick={() => {
                        this.props.history.push('/Search')
                    }} />
                    <span style={{ fontSize: '0.48rem' }} onClick={() => {
                        this.props.history.push('/Play')
                    }} className={'icon-yinle1 iconfont'}></span>
                </header>
                <div className="myFindBanner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.state.banner.map((v, i) => {
                                return (
                                    <div key={i} className="swiper-slide"><img src={v.imageUrl} alt="" />333</div>
                                )
                            })}
                        </div>
                        <div className="swiper-pagination"></div>
                        {/* <!-- 如果需要滚动条 --> */}
                    </div>
                </div>

                <div className='myFindNav_wn'>
                    <div onClick={() => {
                        this.props.history.push('/RecommendedDaily')
                    }}>
                        <span className={'navIconCircle_wn'} >
                            <i className={'icon-xinbaniconshangchuan- iconfont'}></i>
                        </span>
                        <p>每日推荐</p>
                    </div>
                    <div onClick={() => {
                        this.props.history.push('/SongList')
                    }}>
                        <span className={'navIconCircle_wn'} >
                            <i className={'icon-gedan iconfont'}></i>
                        </span>
                        <p>歌单</p>
                    </div>
                    <div onClick={() => {
                        this.props.history.push('/Leaderboard')
                    }}>
                        <span className={'navIconCircle_wn'} >
                            <i className={'icon-paixingbang iconfont'}></i>
                        </span>
                        <p>排行榜</p>
                    </div>
                    <div onClick={() => {
                        this.props.history.push('/Radio')
                    }}>
                        <span className={'navIconCircle_wn'} >
                            <i className={'icon-xianxing_diantai iconfont'}></i>
                        </span>
                        <p>电台</p>
                    </div>
                    <div onClick={() => {
                        this.props.history.push('/LiveBroadcast')
                    }}>
                        <span className={'navIconCircle_wn'} >
                            <i className={'icon-zhibo- iconfont'}></i>
                        </span>
                        <p>直播</p>
                    </div>
                </div>
                <div className='line_wn'></div>

                {/* 歌单 */}
                <div className='songListwn'>
                    <div className='sonList_wn'>
                        <span className={'recommend'}>推荐歌单</span>
                        <span className={'sonlistSquare'} onClick={()=>{
                            this.props.history.push('/SongList/RecommendSongList')
                        }}>歌单广场</span>
                    </div>
                    <div  className={'songlist'}>
                        {
                            this.state.sixsonglist.map((v, i) => {
                                return (
                                    <div onClick={()=>{
                                        this.props.history.push({
                                            pathname:'/Song',
                                            state:{
                                                id:v.id
                                            }
                                        })
                                    }} key={i}>
                                        <p>
                                            <img style={{width:'2.15rem',height:'2.15rem'}} src={v.picUrl} alt=""/>
                                        </p>
                                        <p className={'name'}>{v.name.substr(0,15)+'...'}</p>
                                        <span>{v.playCount}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <hr />
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