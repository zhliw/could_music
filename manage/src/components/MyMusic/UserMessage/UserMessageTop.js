import React from 'react';
import {Icon} from 'antd'
export default class UserMessageTop extends React.Component{
    render() {
        return (
            <div className={'UserMessageTop'}>
                <Icon type="arrow-left" onClick={()=>{
                    window.history.go(-1)
                }} style={{fontSize:'0.4rem'}}/>
                <span>11</span>
            </div>
        )
    }
}