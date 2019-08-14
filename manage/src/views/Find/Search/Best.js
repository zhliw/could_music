import React from "react";
export default class Best extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    componentDidMount(){
        this.getofficiallist()
    }
    async getofficiallist(){
       const data=await this.axios('/top/playlist/highquality')
       console.log(data)

    }
    render(){
        return(
            <div>精品</div>
        )
    }
}