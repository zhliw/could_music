import React from 'react';
export default class mesg extends React.Component{
    render() {
        // console.log(this.props)
        return (
            <div style={{display:'flex',justifyContent:'flex-start',paddingBottom:'0.1rem'}}>
                <div>
                    <img src={this.props.coverImgUrl} alt="" style={{width:'1rem',height:'1rem'}}/>
                </div>
                <div className={'rightMesg'}>
                    <span>{this.props.name}</span>
                    <span style={{display:'block'}}>{this.props.trackCount}</span>
                </div>
            </div>
        )
    }
}