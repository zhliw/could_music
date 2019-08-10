import React from 'react'
import {Icon} from 'antd'
class SongPlayHeader extends React.Component{
    render() {
        return (
            <div className={'SongPlayHeader'}>
                <div>
                    <Icon type="arrow-left" onClick={()=>{
                        window.history.go(-1)
                    }} style={{fontSize:'0.4rem'}}/>
                    <i style={{fontSize:'0.32rem',marginLeft:'0.3rem'}}>歌单</i>
                </div>
                <div className={"SongPlayHeader_R"}>
                    <span className={'iconfont icon-fenxiang1'} ></span>
                </div>
            </div>
        )
    }
}
export default SongPlayHeader