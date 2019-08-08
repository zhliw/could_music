import React from "react";
export default class VideoDetail extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <input type="button" value={"返回"} onClick={()=>{this.props.history.go(-1)}}/>
                </div>
                {this.props.match.params.vid}
            </div>
        )
    }
}