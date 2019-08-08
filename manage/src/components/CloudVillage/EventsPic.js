import React from "react";

export default class EventsPic extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let src=this.props.eventsList[this.props.i].pics[0].originUrl
        return (
            <img style={{width: "2.9rem",height:"auto" ,display:"block", marginBottom:".2rem"}}  src={src} alt=""/>
        );
    }
}