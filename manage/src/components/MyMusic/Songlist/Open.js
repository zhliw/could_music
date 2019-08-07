import React from 'react';
import {Button} from 'antd'
export default class Open extends React.Component{
    constructor(){
        super();
    }
    render() {
        console.log(123,this.props)
        return (
            <>
                <div>
                    <div className={'OpenImg'}><img src={this.props.coverImgUrl} alt=""/></div>
                    <p style={{lineHeight:'1.5rem'}}>{this.props.name}</p>
                    <div style={{textAlign:'left'}}>标签：{
                        this.props.tags.map((v,i)=>{
                            return (
                                <Button size={"small"} ghost={true}>{v}</Button>
                            )
                        })
                    }</div>
                    <div style={{textAlign:'left'}}>
                        {this.props.description}
                    </div>
                </div>
            </>
        )
    }
}