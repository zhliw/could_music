import React from "react";
import { Route,withRouter }  from 'react-router-dom'
class My extends React.Component{
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className={'ygz'}>
                <this.MyNav></this.MyNav>
                <header>
                    <i className={'icon-saomiao iconfont'}></i>
                    <span>账号</span>
                    <i className={'icon-yinle1 iconfont'}></i>
                </header>
                <div className={'loginInfo'}>
                    <p>登录网易云音乐</p>
                    <p>手机端电脑多端同步，尽享海量品质音乐</p>
                    <div className={'loginBtn'}>
                        立即登录
                    </div>
                </div>
                <div className={'VIP'}>
                    <div className={'left'}>
                        <h2>开通黑胶VIP</h2>
                        <p>新客仅5元</p>
                    </div>
                    <div className={'right'}>
                        <span style={{marginRight:'0.1rem'}}>免费领福利</span>
                        <i className={'icon-lipinqia iconfont'}></i>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(My)