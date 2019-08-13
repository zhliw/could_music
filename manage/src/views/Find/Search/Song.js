import React from "react";
export default class Song extends React.Component {
    constructor() {
        super()
        this.state = {
            songlist: {},
            discription:'',
            tracks:[],
            ar:[]
        }
    }
    componentDidMount() {

        this.getSonglist()
        
    }
    async getSonglist() {
        const data = await this.axios(`/playlist/detail?id=${this.props.location.state.id}`)
        console.log(data.playlist.id)
        this.setState({
            songlist: data.playlist,
            songlistId:data.playlist.id
        })
        let discription=this.state.songlist.description
        if(discription.length>26){
            discription=discription.substr(0,27)+'...'
        }
        let tracks=this.state.songlist?this.state.songlist.tracks:[]
        this.setState({
            discription,
            tracks,
        })
        let ar=this.state.tracks?this.state.tracks.ar:[]
        this.setState({
            ar
        })
    }
    render() {
        return (
            <div>
                <this.MyNav></this.MyNav>
                <div>
                    <div className={'songlisthead'}>
                     <this.Return />
                    <span style={{fontSize:'0.36rem',fontWeight:'600'}}>歌单</span>
                    <span style={{ fontSize: '0.48rem' }} onClick={() => {
                        this.props.history.push('/Play')
                    }} className={'icon-yinle1 iconfont'}>
                    </span> 
                </div>
                <div>
                    <div className={'discription'}>
                        <img style={{ width: '2.81rem', height: '2.81rem', }} src={this.state.songlist.coverImgUrl} alt="" />
                        <div className="theDiscription">
                            <div style={{fontSize:'0.35rem',fontWeight:'700'}}>{this.state.songlist.name}</div>
                                <div style={{marginTop:'0.25rem'}}>
                                <img style={{width:'0.6rem',height:'0.6rem',borderRadius:'50%'}}src={this.state.songlist.creator?this.state.songlist.creator.avatarUrl:''} alt="" />
                                <span style={{fontSize:'0.27rem'}}>{this.state.songlist.creator?this.state.songlist.creator.nickname:''}</span>
                                </div>
                                
                            <div className={'dis'}>{this.state.discription}</div>
                        </div>
                    </div>
                    <div>
                        <div className={'fourIcon'}>
                            <div>
                            <span style={{fontSize:'0.43rem'}} className={'icon-pinglun iconfont'}></span>
                            <p style={{fontSize:'0.25rem'}}>{this.state.songlist.commentCount}</p>
                            </div>
                            <div>
                            <span style={{fontSize:'0.43rem'}} className={'icon-fenxiang2 iconfont'}></span>
                            <p style={{fontSize:'0.25rem'}}>{this.state.songlist.shareCount}</p>
                            </div>
                            <div>
                            <span style={{fontSize:'0.43rem'}} className={'icon-xiazai1 iconfont'}></span>
                            <p style={{fontSize:'0.25rem'}}>下载</p>
                            </div>
                            <div>
                            <span style={{fontSize:'0.43rem'}} className={'icon-duoxuan iconfont'}></span>
                            <p style={{fontSize:'0.25rem'}}>多选</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                        
                </div>
                    <div>
                            <div className={'allSong'}>
                            <div style={{height:'0.76rem',width:"100%" ,lineHeight:'0.76rem',background:'red',marginTop:'0.2rem',borderLeftTopRadius:'10px',borderRightTopRadius:'10px'}}>
                                     <span>播放全部</span>
                                    <span>共{this.state.songlist.trackCount}首</span>
                                    <span className={'collect'}>+收藏({this.state.songlist.subscribedCount})</span>
                                </div>
                               <div style={{textAlign:'left',marginLeft:'0.25rem'}}> 
                               {
                                    this.state.tracks.map((v,i)=>{
                                    return <div  style={{height:'0.81rem',marginBottom:'0.4rem',width:'100%',marginTop:'0.2rem'}} 
                                    onClick={()=>{
                                            this.props.history.push(
                                                '/songplay',
                                                {
                                                    songid:v.id,
                                                    songlistid:this.state.songlistId
                                                }
                                            )
                                     }} key={i}>
                                                    <span>{i+1}</span>
                                                <span style={{marginLeft:'0.28rem',fontSize:'0.25rem'}}>{v.name}</span>
                                                    <div>
                                                    {
                                                        v.ar.map((v,i)=>{
                                                    return <span style={{fontSize:'0.18rem'}} key={i}>{v.name}</span>
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                    })
                                }
                               </div>
                               
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}