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
                    title="Basic Drawer"
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </>
        )
    }
}