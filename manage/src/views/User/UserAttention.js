import React from 'react'
class UserAttention extends React.Component{
    constructor(){
        super()
        this.state = {
            attentions:JSON.parse(localStorage.userAttention)
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
                    <span style={{color:'#000',fontSize:'0.34rem'}}>关注</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                <div style={{textAlign:'left'}}>
                    {
                        this.state.attentions.map((v,i)=>{
                            return (
                                <div key={i} style={{margin:'0.3rem 0'}}>
                                    <img src={v.avatarUrl} style={{height:'1rem',width:'1rem',borderRadius:'50%',margin:'0 0.3rem 0 0.5rem'}}/>
                                    <span style={{fontSize:'0.3rem'}}>{v.nickname}</span>
                                    {
                                        v.gender===1?<i className={'icon-nan iconfont'}></i>:<i className={'icon-nv iconfont'}></i>
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

export default UserAttention