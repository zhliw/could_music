import React from 'react'
import {Icon} from 'antd'
import {Drawer} from 'antd';
import Open from './Open'
import {
    withRouter
} from "react-router-dom"
class SongListTop extends React.Component{
    constructor(){
        super()
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
        return(
            <div className={"SongListTop"} style={{height:'4rem'}}>
                <div className={"SongListTop_head"} onClick={this.showDrawer}>
                    <img src={this.props.coverImgUrl} alt=""/>
                    <div style={{paddingLeft:'0.3rem'}}>
                        <p style={{marginBottom:'0.2rem'}}>{this.props.name}</p>
                        <div className={"ToMyMessage"} onClick={(e)=>{
                            e.stopPropagation();
                            this.props.history.push('/UserMessage',this.props.userId)
                        }}>
                            <div><img src={this.props.creator.avatarUrl} alt=""/></div>
                            <p style={{paddingLeft:'0.3rem'}}>{this.props.creator.nickname}<Icon type="right" /></p>
                        </div>
                        <div className={'Mydescription'} style={{height:"1.25rem",overflow:"hidden",paddingTop:'0.3rem'}}>
                            {
                                this.props.description
                            }
                        </div>
                    </div>
                </div>
                <div  className={"iconCol"}>
                    <div >
                        <i className={"iconfont icon-youcexinxi"}></i>
                        <p>{12313}</p>
                    </div>
                    <div>
                        <i className={"iconfont icon-fenxiang1"}></i>
                        <p>暂时没有</p>
                    </div>
                    <div>
                        <i className={"iconfont icon-xiazai"}></i>
                        <p>下载</p>
                    </div>
                    <div>
                        <i className={"iconfont icon-duigou1"}></i>
                        <p>多选</p>
                    </div>
               </div>
                <div>
                    <Drawer
                        height={'13.34rem'}
                        placement="bottom"
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        bodyStyle={{background:"#cccccc"}}
                    >
                        <Open {...this.props}></Open>
                    </Drawer>
                </div>
            </div>
        )
    }
}
export default withRouter(SongListTop)