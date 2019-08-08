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
            <div>  <this.MyNav /><this.Return />
               <div>
                <audio  id="aud"  src={this.state.url} >
                </audio>
                    <span onClick={this.controltheAudio.bind(this)} style={{fontSize:'0.95rem'}} className={this.state.isPlay?'icon-bofangzanting iconfont':'icon-ttpodicon iconfont'}></span>
                </div>
            </div>
            
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(Play)
