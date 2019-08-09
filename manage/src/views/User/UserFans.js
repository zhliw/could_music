import React from 'react'
class UserFans extends React.Component{
    constructor(){
        super()
        this.state = {
            fans:JSON.parse(localStorage.userFans)
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
                    <span style={{color:'#000',fontSize:'0.34rem'}}>粉丝</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                <div  style={{textAlign:'left'}}>
                    {
                        this.state.fans.map((v,i)=>{
                            return (
                                <div key={i} style={{margin:'0.3rem 0'}}>
                                    <img src={v.avatarUrl} style={{height:'0.8rem',width:'0.8rem',borderRadius:'50%',margin:'0 0.3rem 0 0.5rem'}}/>
                                    <span style={{fontSize:'0.3rem'}}>{v.nickname}</span>
                                    {
                                        v.gender===1?<i className={'icon-nan iconfont'} style={{marginLeft:'0.12rem',color:'#c39cae'}}></i>:<i className={'icon-nv iconfont'} style={{marginLeft:'0.12rem',color:'#c39cae'}}></i>
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{height:'1rem'}}></div>
            </div>
        )
    }
}

export default UserFans