//正在播放
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../store/actionCreator/Find/Search'
class Play extends React.Component{
    constructor(){
        super()
        this.state={
            url:''
        }
    }
    componentWillMount(){
        this.props.theSong(this.props.location.state.massage.id)
    }
    componentWillReceiveProps(n){
        console.log(888888,n)
        this.setState({
            url:n.state.find.theSong.data[0].url
        })
    }
    render(){
        return(
            <div>  <this.MyNav /><this.Return />
            <audio controls='controls' src={this.state.url}>播放</audio>
            </div>
            
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(Play)
