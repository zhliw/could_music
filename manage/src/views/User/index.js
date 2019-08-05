import React from "react";
import actionCreator from '../../store/actionCreator/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class My extends React.Component{
    constructor(){
        super()
        this.state = {
            userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{},
            userAttention:[],
            userFans:[]
        }
    }
    componentDidMount(){
        if(localStorage.userInfo){
            this.props.getAttention(this.state.userInfo.profile.userId)
            this.props.getFans(this.state.userInfo.profile.userId)
        }
    }
    componentWillReceiveProps(nextProps){
        this.state.userAttention = nextProps.userAttention
        this.state.userFans = nextProps.userFans
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
                <div style={{display:localStorage.userInfo?'none':'block'}}>
                    <div className={'loginInfo'}>
                        <p>登录网易云音乐</p>
                        <p>手机端电脑多端同步，尽享海量品质音乐</p>
                        <div className={'loginBtn'} onClick={()=>{
                            this.props.history.push('/user/login')
                        }}>
                            立即登录
                        </div>
                    </div>
                </div>


                <div style={{display:localStorage.userInfo?'block':'none'}}>
                    <div>
                        <img  style={{borderRadius:'50%',height:'70px',width:'70px'}} src={localStorage.userInfo?this.state.userInfo.profile.avatarUrl:''}/>
                        <span>{localStorage.userInfo?this.state.userInfo.profile.nickname:''}</span>
                    </div>
                    <div>
                        关注：{this.state.userAttention.length}
                        粉丝：{this.state.userFans.length}
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
                <nav>
                    <div onClick={()=>{
                        this.props.history.push('/user/message')
                    }}>
                        <i className={'icon-xiaoxi iconfont'}></i>
                        <p>消息</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/store')
                    }}>
                        <i className={'icon-shangcheng iconfont'}></i>
                        <p>商城</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/perforMance')
                    }}>
                        <i className={'icon-ticket iconfont'}></i>
                        <p>演出</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/skin')
                    }}>
                        <i className={'icon-lipinqia iconfont'}></i>
                        <p>个性换肤</p>
                        </div>
                </nav>
            </div>
        )
    }
}
export default connect((state)=>({userAttention:state.login.userAttention,userFans:state.login.userFans}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(My)