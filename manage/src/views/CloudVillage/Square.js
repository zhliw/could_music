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
    async componentDidMount() {
        const {data}= await axios.get("/wyy/comment/hot?id=186016&type=0")
        console.log(data)
    }
}