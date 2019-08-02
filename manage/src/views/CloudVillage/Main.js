import React from 'react';
import Event from "./event";
import Square from "./Square"

export default class Main extends React.Component{
    render() {
        return (
            <div className={"cloudVillage-main"}>
                {
                    this.props.match.params.type/1 === 1?<Square></Square>:<Event></Event>
                }
            </div>
        );
    }
}