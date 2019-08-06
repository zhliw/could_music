import React from 'react'

export default class Li extends React.Component{
    render() {
        console.log(this.props.message)
        let message=this.props.message||{}
        return(
            <li className={" Ul-Li"} >
                <span className={message.className} style={{background:message.background,color:message.color,width:'1rem',lineHeight:'1rem',fontSize:'0.5rem',borderRadius:'50%'}}></span>
                <span style={{fontSize:"0.1rem",display:"block"}}>{message.name}</span>
            </li>
        )
    }
}