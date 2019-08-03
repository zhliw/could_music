import React from "react";
import {withRouter} from "react-router-dom";
class PhoneLogin extends React.Component{
    render(){
        return (
            <div className={'ygz_phonelogin'}>
                <header>
                    <i className={'icon-gouwuche iconfont'} onClick={()=>{
                        this.props.history.go(-1)
                    }}></i>
                    <span>手机号登录</span>
                </header>
            </div>
        )
    }
}

export default withRouter(PhoneLogin)
