import React from 'react'
import Mydian from '../common/Mydian'

export default class MusicTag extends React.Component{
    render() {
        return (
            <div className={'MusicTag'}>
                <span className={'MusicTagCount'}>{this.props.count}</span>
                <div className={'MusicTagShow'}>
                    <div className={"MusicTagShowTop"}>
                        <span>{this.props.name}</span>
                        {
                            this.props.alia.length>0?<i>({this.props.alia})</i>:''
                        }
                    </div>
                    <p>{this.props.ar[0].name}-{this.props.al.name}</p>
                </div>
                <div>
                    <span></span>
                    <Mydian></Mydian>
                </div>
            </div>
        )
    }
}