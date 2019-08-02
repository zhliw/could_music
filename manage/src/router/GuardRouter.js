import React from 'react'
import MyNav from '../router/NavLink'
class GuardRouter extends React.Component{
    render(){
        return (
            <div>
                <this.props.component></this.props.component>
                <MyNav></MyNav>
            </div>
        )
    }
}
export default GuardRouter