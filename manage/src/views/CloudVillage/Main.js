import React from 'react';
import Event from "./event";
import Square from "./Square"
import {Route,BrowserRouter as Router} from 'react-router-dom'

export default class Main extends React.Component{
    render() {
        console.log(this.props.match.params)
        return (
            <div className={"cloudVillage-main"}>
                {
                    this.props.match.params.type/1 === 2?<Event></Event>:<Square></Square>
                }
            </div>
        );
    }
}