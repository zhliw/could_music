import React from 'react';
import {
    withRouter
} from 'react-router-dom'
class mesg extends React.Component{
    render() {
        // console.log(this.props)
        // console.log(123141,this.props.history)
        return (
            <div onClick={()=>this.props.history.push('/MySongList',this.props.id)} style={{display:'flex',justifyContent:'flex-start',paddingBottom:'0.1rem'}}>
                <div style={{background:'#ccc'}}>
                    <img src={this.props.coverImgUrl} alt="" style={{width:'1rem',height:'1rem'}}/>
                </div>
                <div className={'rightMesg'}>
                    <span >{this.props.name}</span>
                    <span style={{display:'block',textAlign:'left'}}>{this.props.trackCount}首</span>
                </div>
            </div>
        )
    }
}
export default withRouter(mesg)