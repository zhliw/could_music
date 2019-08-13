import React from 'react'
import {Icon,Drawer} from 'antd'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import myPublicCreator from "../../../store/actionCreator/Public";
class SongPlayList extends React.Component{
    constructor(){
        super()
        this.state={
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return(
            <>
                <Icon type="menu" style={{fontSize:'0.4rem'}} onClick={this.showDrawer} />
                <Drawer
                    title="播放歌单"
                    height={"7rem"}
                    closable={false}
                    placement={"bottom"}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                   <div className={"songlistmenu"} >
                      {
                          this.props.songPlayList.map((v,i)=>{
                              return(
                                  <div key={i} onClick={()=>{
                                      this.props.getMyLyric(v.id)
                                      this.props.getSongPlayUrl(v.id)
                                      this.onClose()
                                  }}><div>{v.name}-<span>{v.ar[0].name}</span></div><Icon type="delete" onClick={(e)=>{
                                      e.stopPropagation()
                                      let index=this.props.songPlayList.findIndex(z=>z.id===v.id)
                                      this.props.songPlayList.splice(index,1)
                                      this.props.getSongPlayList(this.props.songPlayList)
                                      this.onClose()
                                  }}/></div>
                              )
                          })
                      }
                   </div>
                </Drawer>
            </>
        )
    }
}
export default connect((state)=>({songPlayList:state.allPublic.songPlayList,myLyric:state.allPublic.myLyric,songPlayUrl:state.allPublic.songPlayUrl}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongPlayList)