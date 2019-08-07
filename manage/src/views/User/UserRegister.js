import React from 'react'

class UserRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code:this.props.location.state.code,
            userPassWord:''
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    goUserName(){
        if(this.state.userPassWord.length>=6){
            this.props.history.push({
                pathname:'/user/userregistername',
                state:this.state
            })
        }else{
            alert('登录密码不得少于6位!')
        }
    }
    render(){
        return (
            <div>
                <div className={'ygz_phonelogin'}>
                    <div className={'header'}>
                        <i className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>手机号注册</span>
                    </div>
                    <input type={'password'} placeholder={'设置登录密码,不少于6位'} autoFocus value={this.state.userPassWord} name={'userPassWord'} onChange={this.handleChange.bind(this)} style={{width:'6.82rem',fontSize:'0.3rem',margin:'1rem 0'}}/>
                    <div className={'upPSBtn'} style={{margin:'0 auto'}} onClick={this.goUserName.bind(this)}>下一步</div>                                     
                </div>
            </div>
        )
    }
}

export default UserRegister