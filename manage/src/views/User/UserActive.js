import React from 'react'
class UserActive extends React.Component{
    constructor(){
        super()
        this.state = {
            userActive:JSON.parse(localStorage.userActive)
        }
    }
    render(){
        return (
            <div>
                <this.MyNav></this.MyNav>
                <header style={{marginBottom:'0.1rem',display:'flex'}}>
                    <i style={{color:'#000',fontSize:'0.34rem',fontWeight:'900'}} className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                    }}></i>
                    <span style={{color:'#000',fontSize:'0.34rem'}}>动态</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                {
                    this.state.userActive.map((v,i)=>{
                        let json = JSON.parse(v.json)
                        console.log(v)
                        return (
                            <div key={i} style={{padding:'0.6rem 0.3rem 0.4rem 0.3rem',borderBottom:'1px solid #e3e3e3'}}>
                                <div  style={{display:'flex'}}>
                                    <img src={v.user.avatarUrl} alt="" style={{width:'0.8rem',height:'0.8rem',borderRadius:'50%'}}/>
                                    <div>
                                        <p style={{margin:'0.13rem 0',fontSize:'0.28rem'}}><i style={{color:'#6e8279'}}>{v.user.nickname}</i>分享了单曲:</p>
                                        <p style={{marginLeft:'0.1rem',fontSize:'0.2rem'}}>{this.filters.date(v.showTime)}</p>
                                    </div>
                                </div>
                                <p style={{textAlign:'left',fontSize:'0.3rem',color:'#000',margin:'0.42rem 0 0.23rem 1.33rem'}}>{json.msg}</p>
                                <div style={{display:'flex',background:'#f5f5f5',marginLeft:'1rem',padding:'0.16rem',borderRadius:'10px'}}>
                                    <img src={json.song.album.img80x80} alt="" style={{width:'0.8rem',height:'0.8rem'}}/>
                                    <div style={{textAlign:'left',marginLeft:'0.17rem'}}>
                                        <p style={{color:'#6e8279',fontSize:'0.27rem',color:'#000',margin:'0.08rem 0 0.15rem 0'}}>{json.song.bMusic.name?json.song.bMusic.name:json.song.name}</p>
                                        <p>{json.song.artists[0].name}</p>
                                    </div>
                                </div>
                                <div style={{fontSize:'0.3rem',display:'flex',padding:'0.42rem 0.1rem 0 1rem',justifyContent:'space-between'}}>
                                    <span><i className={'icon-zhuanfa iconfont'} style={{marginRight:'0.12rem'}}></i>转发</span>
                                    <span><i className={'icon-pinglun1 iconfont'} style={{marginRight:'0.12rem'}}></i>{v.info.commentCount}</span>
                                    <span><i className={'icon-dianzan2 iconfont'} style={{marginRight:'0.12rem'}}></i>赞</span>
                                    <span><i className={'icon-gengduo1 iconfont'} style={{marginRight:'0.12rem'}}></i></span>
                                </div>
                            </div>
                        )
                    })
                }
                <div style={{height:'3rem'}}></div>
            </div>
        )
    }
}

export default UserActive