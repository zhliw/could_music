import React from "react";
import "../../assets/css/cloudVillage/square.scss";
import axios from 'axios';

export default class Square extends React.Component{
    render(){
        return(
            <div className={"cloudVillage-square"}>
                <div className={"cloudVillage-hot-comments"}>
                    <div className={"cloudVillage-hot-comments-list"}>

                    </div>
                </div>
            </div>
        )
    }
}