import React from 'react'

export default class Li extends React.Component{
    render() {
        let message=this.props.message||{}
        return(
            <li className={" Ul-Li"} style={{paddingTop:"0.2rem"}}>
                <span className={message.className} style={{background:message.background,display:"inline-block",color:message.color,width:'0.7rem',lineHeight:'0.7rem',textAlign:"center",fontSize:'0.4rem',borderRadius:'50%'}}></span>
                <span style={{fontSize:"0.1rem",boxSizing:"border-box",paddingTop:"0.2rem",display:"block"}}>{message.name}</span>
            </li>
        )
    }
}