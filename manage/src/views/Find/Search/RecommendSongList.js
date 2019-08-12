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
                let mySwiper = new Swiper('.swiper-container',{
                    spaceBetween : 50,
                    loop:true,
                    effect : 'coverflow',
                    slidesPerView: 2,
                    centeredSlides: true,
                    coverflowEffect: {
                      rotate: 0,
                      stretch: 6,
                      depth: 100,
                      modifier: 2,
                      slideShadows : false
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
                                 <div style={{height:'4.39rem'}} className="swiper-container">
                                 <div className="swiper-wrapper">
                            {
                                 this.state.preThree.map((v,i)=>{
                                return (
                                
                                         <div style={{borderRadius:'0.2rem'}} className="swiper-slide" onClick={()=>{
                                    this.props.history.push({
                                        pathname:'/Song',
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }
                                } key={i}>
                                    <img style={{height:'3.45rem',width:'3.45rem'}} src={v.coverImgUrl} alt=""/>
                                    <div style={{padding:'0.22rem 0.1rem',border:'1px solid #ededed',fontSize:'0.17rem',textAlign:'left',height:'0.9rem',width:'3.42rem',wordWrap:'breakWord'}} className={'presonglistName'}>{v.name}</div>    
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