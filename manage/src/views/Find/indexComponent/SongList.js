//歌单
import React from "react";
import '../../../assets/css/Find/find.css'
import{
    NavLink,
    Route
} from 'react-router-dom'
import findNav from '../../../router/Find_Nav'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class AllSonglist extends React.Component{
    constructor(){
        super()
        this.state={
            findnav:[]
        }
    }
    componentDidMount(){
        new Swiper('.swiper-container-songlist', {
            freeMode:true,
            observer: true,
            slidesPerView: 6,
            scrollbar: {
                el: '.swiper-scrollbar',
                dragSize: 30
              }

        })
    }
    componentWillMount(){
        this.props.history.push('/SongList/RecommendSongList')
        let findnav=findNav.find(v=>v.to==='/SongList').children
        // console.log(1,findnav)
        this.setState({
            findnav
        })
    }
    
    render(){
        return(
            <div>
                <this.MyNav></this.MyNav>
                 <div className={'songlist_header'}>  
                <span className={'icon-fanhui iconfont'} onClick={()=>{
                    this.props.history.push('/')
                }}></span>
                <span style={{fontSize:'0.33rem'}}>歌单广场</span>  
                <span className={'icon-yinle1 iconfont'}></span>
                </div>
                <div>
                      <div style={{marginTop:'0.55rem'}} className="swiper-container-songlist">
                        <div className="swiper-wrapper">
                           {
                    this.state.findnav.map((v,i)=>{
                                return (
                                    <div style={{fontSize:'0.28rem'}} key={i} className="swiper-slide">
                                        <NavLink activeStyle={{color:'red'}} to={v.to}>{v.context}</NavLink>
                                        
                                    </div>
                                    
                                )
                            })
                        }
                        <div className="swiper-scrollbar"></div>
                        </div>
                </div>
                {
                    this.state.findnav.map((v,i)=>{
                        return(
                            <Route key={i} path={v.path} component={v.component}></Route>
                        )
                    })
                }
                </div>
                      
                

            </div>
        )
    }
}