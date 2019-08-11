import React from "react";
import '../../../assets/css/Find/find.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class RecommenSongList extends React.Component{
    constructor(){
        super()
        this.state={
            otherSonglist:[],
            preThree:[]
        }
    }

    componentDidMount(){
        // var mySwiper = new Swiper('.swiper-container',{
        //     on: {
        //       slideChangeTransitionStart: function(){
        //         alert(this.activeIndex);
        //       },
        //     },
        //   })
        this.getSonlist()
    }
   getSonlist(){
        // 获取歌单广场所有推荐的歌单
         this.axios('/top/playlist').then(data=>{
             const otherSonglist=data.playlists.slice(3)
             const preThree=data.playlists.slice(0,3)
             this.setState({
                otherSonglist,
                 preThree
             },()=>{
                let mySwiper=new Swiper('.swiper-container', {
                    effect:'flipe',
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
             console.log(data)
         })
       
        }
    render(){
        return(
            <div>
                {/* 推荐（所有）歌单 */}
                    <div  className={'presonglist'}>
                                 <div style={{height:'3.38rem'}} className="swiper-container">
                                 <div className="swiper-wrapper">
                            {
                                 this.state.preThree.map((v,i)=>{
                                return (
                                
                                         <div style={{borderRadius:'0.2rem'}}className="swiper-slide" onClick={()=>{
                                    this.props.history.push({
                                        pathname:'/Song',
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }
                                } key={i}>
                                    <img style={{height:'2.64rem',width:'2.64rem'}} src={v.coverImgUrl} alt=""/>
                                    <div style={{fontSize:'0.17rem',textAlign:'center',height:'0.74rem',width:'100%',lineHeight:'0.74rem'}} className={'presonglistName'}>{v.name}</div>    
                                </div>
                                    
                               
                                    )
                                })
                            }
                            </div>
                        </div>
                                </div>
                                <div className={'othersonglist'}>
                            {
                                this.state.otherSonglist.map((v,i)=>{
                                    return(
                                        <div onClick={()=>{
                                            this.props.history.push({
                                                pathname:'/Song',
                                                state:{
                                                    id:v.id
                                                }
                                            })
                                        }
                                        } key={i}>
                                        <img style={{height:'2.14rem',width:'2.14rem'}} src={v.coverImgUrl} alt=""/>
                                        <div className={'songlistName'}>{v.name}</div>    
                                        </div>
                                    )
                                })
                            }
                            </div>
            </div>
        )
    }
}