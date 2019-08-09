import React from "react";
import '../../../assets/css/Find/find.css'
export default class RecommenSongList extends React.Component{
    constructor(){
        super()
        this.state={
            otherSonglist:[],
            preThree:[]
        }
    }
    componentDidMount(){
        this.getSonlist()
    }
    async getSonlist(){
        // 获取歌单广场所有推荐的歌单
        const data=await this.axios('/top/playlist')
        const otherSonglist=data.playlists.slice(3)
        const preThree=data.playlists.slice(0,3)
        this.setState({
           otherSonglist,
            preThree
        })
        console.log(data)
    }
    render(){
        return(
            <div>
                {/* 推荐（所有）歌单 */}
                    <div  className={'presonglist'}>
                            {
                            this.state.preThree.map((v,i)=>{
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
                                    <img style={{height:'3.45rem',width:'3.45rem'}} src={v.coverImgUrl} alt=""/>
                                    <div className={'presonglistName'}>{v.name}</div>    
                                </div>
                                    
                                    )
                                })
                            }
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