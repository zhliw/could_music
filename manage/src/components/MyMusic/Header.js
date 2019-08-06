import React from 'react';
import msgArr from './common/data'
import Li from "./common/Li";

export default class Header extends React.Component{
    render() {
        const ulWidth=msgArr.length*2.1+'rem'
        return (
            <div className={'MyMusic-header'}>
                <div className={'MyMusic-header-top'}>我的音乐</div>
                <div className={'MyMusic-header-Bottom'}>
                    <ul className={"MyMusic-header-Bottom-Ul"} style={{width:ulWidth}}>
                        {
                            msgArr.map((v,i)=>{
                                return (
                                    <Li message={v} key={i}></Li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}