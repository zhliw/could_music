//正在播放
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../store/actionCreator/Find/Search'
class Play extends React.Component{
    constructor(){
        super()
        this.state={
            url:'',
            isPlay:false
        }
    }
    componentWillMount(){
       if(this.props.location.state){
           console.log(this.props.location.state.id)
           this.props.theSong(this.props.location.state.id)
           
       }
    }
    controltheAudio(){
        let theAudio=document.getElementById('aud')
        this.setState({
            isPlay:!this.state.isPlay
        })
        this.state.isPlay?theAudio.pause():theAudio.play()
    }
    componentWillReceiveProps(n){
        console.log(888888,n)
        this.setState({
            url:n.state.find.theSong.data[0].url
        })
    }
    render(){
        return(
            <div>  <this.MyNav />
               <div style={{width:'100%',height:'100%'}}>
                <audio  id="aud"  src={this.state.url} >
                </audio>
                <this.Return />
                {/* 点击播放 */}
                <span onClick={this.controltheAudio.bind(this)} 
                className={this.state.isPlay?'icon-pause iconfont':'icon-rectangle1 iconfont'}>
                </span>
                </div>
            </div>
            
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(Play)
