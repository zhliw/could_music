//返回按键
import React from 'react'
import {
    withRouter
} from 'react-router-dom'
class Return extends React.Component{
    render(){
        return(
           <span style={{fontSize:'0.48rem'}} className={'icon-gouwuche iconfont'} onClick={()=>{
               this.props.history.go(-1)
           }}></span>
            
        )
    }
}
export default withRouter(Return)