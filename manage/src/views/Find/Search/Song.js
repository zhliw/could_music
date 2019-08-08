import React from "react";
export default class Song extends React.Component {
    constructor() {
        super()
        this.state = {
            songlist: {},
            discription:''
        }
    }
    componentWillMount() {
        console.log(this.props.location.state.id)
    }
    componentDidMount() {
        this.getSonglist()
        
    }
    async getSonglist() {
        const data = await this.axios(`/playlist/detail?id=${this.props.location.state.id}`)
        this.setState({
            songlist: data.playlist
        })
        let discription=this.state.songlist.description
        console.log(discription)
        if(discription.length>26){
            discription=discription.substr(0,26)+'...'
        }
        this.setState({
            discription
        })
        console.log(discription)
    }
    render() {
        return (
            <div className='theSonglist'>
                <this.MyNav></this.MyNav>
                <div className={'songlistheader'}>
                <this.Return />
                    <span style={{fontSize:'0.36rem',fontWeight:'600'}}>歌单</span>
                    <span style={{ fontSize: '0.48rem' }} onClick={() => {
                        this.props.history.push('/Play')
                    }} className={'icon-yinle1 iconfont'}>
                    </span> 
                </div>
                
                <div>
                    <div className={'discription'}>
                        <img style={{ width: '2.81rem', height: '2.81rem' }} src={this.state.songlist.coverImgUrl} alt="" />
                        <div className="theDiscription">
                            <div>{this.state.songlist.name}</div>
                            <img style={{width:'0.6rem',height:'0.6rem',borderRadius:'50%'}}src={this.state.songlist.creator?this.state.songlist.creator.avatarUrl:''} alt="" />
                            <span>{this.state.songlist.creator?this.state.songlist.creator.nickname:''}</span>
                            <div>{this.state.description}</div>
                        </div>
                    </div>
                    <div>四个图标</div>
                    <div style={{ height: '6.19rem', background: 'red', width: '100%', border: '0.01rem,solid,gray' }}>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                            <div>
                                <span>播放全部</span>
                                <span>共{this.state.songlist.trackCount}首</span>
                                <span>+收藏({this.state.songlist.subscribedCount})</span>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        )
    }
}