import React from "react";
export default class Official extends React.Component{
    componentDidMount(){
        this.getofficiallist()
    }
    async getofficiallist(){
       const data=await this.axios('/top/playlist/highquality')
       console.log(data)

    }
    render(){
        return(
            <div>官方</div>
        )
    }
}