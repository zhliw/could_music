import React from "react";
class UserPlayList extends React.Component{
    constructor(){
        super()
        this.state = {
            userName:JSON.parse(localStorage.userInfo).profile.nickname,
            userPlayList:JSON.parse(localStorage.userPlayList),
            userFans:JSON.parse(localStorage.userFans),
            userAttention:JSON.parse(localStorage.userAttention)
        }
    }
    componentWillMount(){

    }
    render(){
        return (
            <div>
                <this.MyNav></this.MyNav>
                <header style={{marginBottom:'0.1rem',opacity:'.6',position:'fixed',zIndex:'2',top:'0'}}>
                    <i className={'icon-fanhui iconfont'} onClick={()=>{this.props.history.go(-1)}}></i>
                    <span style={{color:'#000',fontSize:'0.34rem',marginLeft:'2rem'}}>{this.state.userName}</span>
                    <i className={'icon-yinle1 iconfont'} style={{marginLeft:'2rem'}}></i>
                </header>
                <div style={{position:'relative',height:'7.5rem'}}>
                    <img src={this.state.userPlayList[0].creator.backgroundUrl} style={{width:'100%',position:'absolute',top:'0',left:'0'}}alt=""/>
                    <img src={this.state.userPlayList[0].creator.avatarUrl} alt="" style={{width:'100%',position:'absolute',top:'1.5rem',left:'0.37rem',height:'1.6rem',width:'1.6rem',borderRadius:'50%'}}/>
                    <p style={{position:'absolute',left:'0.43rem',top:'3.3rem',fontSize:'0.3rem',color:'#fff',fontWeight:'900'}}>{this.state.userName}</p>
                    <p style={{position:'absolute',left:'0.43rem',top:'4rem',fontSize:'0.3rem',color:'#fff',fontWeight:'600'}}>关注<span>{this.state.userAttention.length}</span> | 粉丝<span>{this.state.userFans.length}</span></p>
                    <div style={{position:'absolute',height:'1rem',width:'100%',background:'#fff',bottom:'0',fontSize:'0.3rem',fontWeight:'900',color:'red',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottom:'1px solid #eaeaea',lineHeight:'1rem'}}>音乐</div>
                </div>
                {
                    this.state.userPlayList.map((v,i)=>{
                        return (
                            <div style={{display:'flex',marginTop:'0.2rem',textAlign:'left'}} key={i}>
                                <img src={v.coverImgUrl} alt=""style={{height:'1rem',width:'1rem',borderRadius:'0.1rem',marginLeft:'0.3rem'}}/>
                                <div style={{marginLeft:'0.2rem'}}>
                                    <p style={{fontSize:'0.3rem',marginTop:'0.2rem'}}>{v.name}</p>
                                    <p>{v.trackCount}首,播放<span>{v.playCount}次</span></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default UserPlayList