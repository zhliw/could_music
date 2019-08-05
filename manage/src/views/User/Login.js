import React from 'react'
import { withRouter } from 'react-router-dom'
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            isChecked:false,
            isShow:false
        }
    }
    phoneClick(){
        if( this.state.isChecked ){
            this.props.history.push('/user/phonelogin')
        }else{
            this.setState({
                isShow:!this.state.isShow
            })
            setTimeout(()=>{
                this.setState({
                    isShow:false
                })
            },1500)
        }
    }
    render(){
        return (
            <div className='ygz_login'>
                <div className={'shade'} style={{display:this.state.isShow?'block':'none'}}>
                    <p>请先勾选同意《服务条款》和</p>
                    <p>《隐私政策》</p>
                </div>
                <div className="logo">
                    <div className="err icon-close iconfont" onClick={()=>{
                        this.props.history.go(-1)
                    }}></div>
                    <i className={'icon-wangyiyunyinle iconfont'} style={{fontSize:'1.45rem',color:'white'}}></i>
                </div>
                <div className="loginBtn" onClick={this.phoneClick.bind(this)}>
                    手机号登录
                </div>
                <div className="rule">
                    <i onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }} style={{display:this.state.isChecked?'none':'inline-block',color:'#ff6d61'}} className={'icon-danxuan iconfont'}></i>
                    <i onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }} style={{display:this.state.isChecked?'inline-block':'none',color:'#ff6d61'}} className={'icon-danxuan1 iconfont'}></i>
                    <span>同意<a href={'javascript:;'}>《服务条款》</a>和<a  href={'javascript:;'}>《隐私政策》</a></span>
                </div>
                <div className={'logos'}>
                    <div><i className={'icon-weixin iconfont'}></i></div>
                    <div><i className={'icon-qq1 iconfont'}></i></div>
                    <div><i className={'icon-weibo iconfont'}></i></div>
                    <div><i className={'icon-yi iconfont'}></i></div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)