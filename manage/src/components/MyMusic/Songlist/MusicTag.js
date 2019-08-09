import React from 'react'
// import Mydian from '../common/Mydian'
import {
    withRouter
} from "react-router-dom"
 class MusicTag extends React.Component{
    render() {
        return (
            <div className={'MusicTag'} onClick={()=>this.props.history.push('/SongPlay',this.props.id)}>
                <span className={'MusicTagCount'}>{this.props.count}</span>
                <div className={'MusicTagShow'}>
                    <div className={"MusicTagShowTop"}>
                        <span>{this.props.name}</span>
                        {
                            this.props.alia.length>0?<i>({this.props.alia})</i>:''
                        }
                    </div>
                    <div className={'MusicTagShowBot'}>{this.props.ar[0].name}-{this.props.al.name}</div>
                </div>
                <div className={"MusicTagMore"} style={{lineHeight:'1rem',width:'1.5rem'}}>
                    {
                        this.props.mv? <span className={"iconfont icon-shipin"}></span>:<span></span>
                    }
                    <span className={"iconfont icon-gengduo2"}></span>
                    {/*<Mydian></Mydian>*/}
                </div>
            </div>
        )
    }
}
export default withRouter(MusicTag)