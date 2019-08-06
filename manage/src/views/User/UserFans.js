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
                <header style={{marginBottom:'0.1rem'}}>
                    <i style={{color:'#000',fontSize:'0.34rem',fontWeight:'900'}} className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                    }}></i>
                    <span style={{color:'#000',fontSize:'0.34rem'}}>粉丝</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                <div>
                    {
                        this.state.fans.map((v,i)=>{
                            return <div>{v.nickname}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserFans