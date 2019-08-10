import React from 'react'
export default class UserEvent extends React.Component{
    render() {
        console.log(this.props,2131321)
        return (
            <div>
                {
                    this.props.events.map((v,i)=>{
                        return (
                            <div key={i}>略略略，看不懂数据</div>
                        )
                    })
                }
            </div>
        )
    }
}