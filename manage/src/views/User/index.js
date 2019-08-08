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
            this.props.getUserPlayList(this.state.userInfo.profile.userId)
        }
    }
    componentWillReceiveProps(nextProps){
        this.state.userAttention = nextProps.userAttention
        this.state.userFans = nextProps.userFans
    }
    goUserAttention(){
        this.props.history.push('/user/userattention')
    }
    goUserFans(){
        this.props.history.push('/user/userfans')        
    }
    outLogin(){
        localStorage.clear()
        this.props.history.push('/user')
    }
    render(){
        return(
            <div className={'ygz'}>
                <this.MyNav></this.MyNav>
                <header style={{marginBottom:'0.1rem'}}>
                    <i className={'icon-saomiao iconfont'}></i>
                    <span style={{color:'#000',fontSize:'0.34rem'}}>账号</span>
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
                        <img onClick={()=>{this.props.history.push('/user/userplaylist')}} style={{borderRadius:'50%',height:'70px',width:'70px'}} src={localStorage.userInfo?this.state.userInfo.profile.avatarUrl:''}/>
                        <span style={{fontSize:'0.4rem',marginLeft:'0.2rem'}}>{localStorage.userInfo?this.state.userInfo.profile.nickname:''}</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',margin:'0.15rem 0'}}>
                        <div style={{marginRight:'2rem'}} onClick={this.goUserAttention.bind(this)}>
                            <p style={{fontSize:'0.4rem',color:'#000'}}>
                                {this.state.userAttention.length}
                            </p>
                            <p>
                                关注
                            </p>
                        </div>
                        <div onClick={this.goUserFans.bind(this)}>
                            <p style={{fontSize:'0.4rem',color:'#000'}}>
                                {this.state.userFans.length}
                            </p>
                            <p>
                                粉丝
                            </p>
                        </div>
                    </div>
                </div>

                <div className={'VIP'}>
                    <div className={'left'}>
                        <h2 style={{color:'#f2e2e2'}}>开通黑胶VIP</h2>
                        <p>新客仅5元</p>
                    </div>
                    <div className={'right'}>
                        <span style={{marginRight:'0.1rem'}}>免费领福利</span>
                        <i className={'icon-lipinqia iconfont'}></i>
                    </div>
                </div>
                <nav>
                    <div onClick={()=>{
                        this.props.history.push('/user/message/1')
                    }}>
                        <i className={'icon-xiaoxi iconfont'}></i>
                        <p style={{marginTop:'0.1rem'}}>消息</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/store')
                    }}>
                        <i className={'icon-shangcheng iconfont'}></i>
                        <p style={{marginTop:'0.1rem'}}>商城</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/perforMance')
                    }}>
                        <i className={'icon-ticket iconfont'}></i>
                        <p style={{marginTop:'0.1rem'}}>演出</p>
                        </div>
                    <div onClick={()=>{
                        this.props.history.push('/user/skin')
                    }}>
                        <i className={'icon-lipinqia iconfont'}></i>
                        <p style={{marginTop:'0.1rem'}}>个性换肤</p>
                        </div>
                </nav>
                <div style={{height:'0.3rem',width:'100%',background:'#f7f7f7',marginTop:'0.5rem'}}></div>
                <main style={{padding:'0 0.33rem'}}>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-icon--1 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>口袋铃声</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-dingdan iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>我的订单</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-hj3 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4.7rem'}}>设置</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-yueliangxingxing_moon-start iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>夜间模式</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-icon-test1 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>定时关闭</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-naozhong iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>音乐闹钟</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-qiabao iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-3rem'}}>在线听歌免流量</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-icon-test2 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4.3rem'}}>优惠卷</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-yinle2 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-3rem'}}>加入网易音乐人</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-huatong1 iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>我要直播</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-zhuanfa iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-3rem'}}>分享网易云音乐</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',height:'1rem',lineHeight:'1rem',color:'#4a4a4a',borderBottom:'1px solid #eaeaea'}}>
                        <i className={'icon-guanyu iconfont'} style={{fontSize:'0.4rem'}}></i>
                        <span style={{fontSize:'0.33rem',marginLeft:'-4rem'}}>关于</span>
                        <i className={'icon-qianjin iconfont'} style={{fontSize:'0.4rem'}}></i>
                    </div>
                </main>
                <div style={{height:'0.3rem',width:'100%',background:'#f7f7f7',marginTop:'0.5rem'}}></div>
                {
                    localStorage.userInfo?<div onClick={this.outLogin.bind(this)} style={{margin:'0 auto',height:'0.76rem',width:'100%',textAlign:'center',lineHeight:'0.76rem',fontSize:'0.3rem',color:'red'}}>退出登录</div>:null
                }
                
                <div style={{height:'1rem'}}></div>                                    
            </div>
        )
    }
}
export default connect((state)=>({userAttention:state.login.userAttention,userFans:state.login.userFans}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(My)