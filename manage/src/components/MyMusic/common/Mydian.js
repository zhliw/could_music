import React from 'react';
import {Drawer} from 'antd';

export default class Mydian extends React.Component{
    constructor(){
        super();
        this.state = { visible: false }
    }
    showDrawer = (e) => {
        e.stopPropagation()
        this.setState({
            visible: true,
        });
    };
    onClose = (e) => {
        e.stopPropagation()
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <>
                <span className={"iconfont icon-gengduo2"} onClick={this.showDrawer}></span>
                <Drawer
                    title={this.props.top}
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {
                        this.props.msg.map((v,i)=>{
                            return <p key={i} className={'zslOnlyp'}><span className={v.className}></span><i>{v.title}</i></p>
                        })
                    }
                </Drawer>
            </>
        )
    }
}