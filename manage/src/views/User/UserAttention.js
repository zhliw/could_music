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
                <header style={{marginBottom:'0.1rem'}}>
                    <i style={{color:'#000',fontSize:'0.34rem',fontWeight:'900'}} className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                    }}></i>
                    <span style={{color:'#000',fontSize:'0.34rem'}}>关注</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                <div>
                    {
                        this.state.attentions.map((v,i)=>{
                            return <div>{v.nickname}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserAttention