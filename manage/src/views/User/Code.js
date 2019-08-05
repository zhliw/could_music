import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../store/actionCreator/Login'
class Code extends React.Component{
    constructor(){
        super()
        this.state = {
            code:''
        }
    }
    handlerChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type={'text'} value={this.state.code} onChange={this.handlerChange.bind(this)} name={'code'}/>
                <input type={'button'} value={'修改'} onClick={this.upPassWord.bind(this)}/>
            </div>
        )
    }
    upPassWord(){
        const data = this.axios.get(`/register/cellphone?phone=${this.props.location.state.userPhone}&password=${this.props.location.state.userPassWord}&captcha=${this.state.code}&nickname=${this.props.registerInfo.nickname}`)
        console.log(data)
    }
}

export default connect((state)=>({registerInfo:state.login.registerInfo}),(dispatch)=>bindActionCreators(actionCreators,dispatch))(Code)