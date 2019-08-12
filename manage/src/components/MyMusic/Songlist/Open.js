import React from 'react';
import {Button} from 'antd'
export default class Open extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div style={{height:'13.34rem'}}>
                <div style={{textAlign:"center"}}>
                    <div className={'OpenImg'}><img src={this.props.coverImgUrl} alt=""/></div>
                    <p style={{lineHeight:'1.5rem',fontSize:'0.4rem'}}>{this.props.name}</p>
                    <div style={{textAlign:'left'}}>标签：{
                        this.props.tags.length>0?this.props.tags.map((v,i)=>{
                            return (
                                <Button size={"small"} ghost={true} key={i}>{v}</Button>
                            )
                        }):<div>暂无描述</div>
                    }</div>
                    <div style={{textAlign:'left'}}>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}