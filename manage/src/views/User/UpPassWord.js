import React from 'react'
class UpPassWord extends React.Component{
    constructor(){
        super()
        this.state = {
            userPhone:localStorage.userPhone,
            userPassWord:''
        }
    }
    handlerChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    async sendCode(){
        if(this.state.userPassWord.length<6){
            return
        }else{
            const data = this.axios.get('/captcha/sent?phone='+this.state.userPhone)
            this.props.history.push({
                pathname:'/user/code',
                state:this.state
            })
        }
        
    }
    render(){
        return (
            <div className={'ygz_phonelogin'} style={{padding:'0 0.3rem'}}>
                <header>
                    <i style={{marginLeft:'-0.3rem'}} className={'icon-gouwuche iconfont'} onClick={()=>{
                        this.props.history.go(-1)
                    }}></i>
                    <span>重设密码</span>
                </header>
                <p className={'userPhone_upPS'}>
                    <span style={{marginRight:'0.1rem'}}>+86</span><input type={'text'} disabled name={'userPhone'} onChange={this.handlerChange.bind(this)} value={this.state.userPhone}/>
                </p>
                <p className={'userPhone_upPS'}>
                    <input style={{width:'5rem',fontSize:'0.3rem'}} type={'password'} name={'userPassWord'} onChange={this.handlerChange.bind(this)} value={this.state.userPassWord} placeholder='设置登录密码,不少于六位'/>
                </p>
                <div className={'upPSBtn'} onClick={this.sendCode.bind(this)}>下一步</div>
            </div>
        )
    }
}
export default UpPassWord