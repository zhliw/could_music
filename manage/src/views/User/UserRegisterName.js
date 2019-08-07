import React from 'react'
class UserRegisterName extends React.Component{
    constructor(){
        super()
        this.state = {
            userName:''
        }
    }
    componentWillMount(){
        console.log(this.props.location.state)
    }
    async userRegister(){
        const props = this.props.location.state
        const data = await this.axios.get(`/register/cellphone?phone=${localStorage.userPhone}&password=${props.userPassWord}&captcha=${props.code}&nickname=${this.state.userName}`)
        if(data){
            
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <div>
                 <div className={'ygz_phonelogin'}>
                    <div className={'header'}>
                        <i className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>给自己取个昵称</span>
                    </div>
                    <i className={'icon-hi iconfont'} style={{fontSize:'3rem'}}></i>  
                    <p style={{color:'#2c2c2c',fontSize:'0.26rem'}}>你希望大家怎么称呼你呢？</p> 
                    <div style={{borderBottom:'1px solid #e6e6e6',margin:'0.5rem 0.3rem',textAlign:'left'}}>
                        <input type={'text'} value={this.state.userName} name={'userName'} onChange={this.handleChange.bind(this)} autoFocus placeholder={'请输入昵称'} style={{border:'none',outline:'none',width:'4rem',height:'1rem',fontSize:'0.3rem'}}/>
                    </div>
                    <div className={'upPSBtn'} style={{margin:'0 auto'}} onClick={this.userRegister.bind(this)}>开启云音乐</div>                                     
                </div>
            </div>
        )
    }
}

export default UserRegisterName