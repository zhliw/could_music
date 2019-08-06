//综合
import React from "react";
export default class All extends React.Component{
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <this.MyNav></this.MyNav>
                <div>你可能感兴趣</div>
                <div>
                    <span>单曲</span><span>播放全部</span>
                </div>
            </div>
        )
    }
}