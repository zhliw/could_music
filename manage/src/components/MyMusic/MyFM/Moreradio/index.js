import React from "react"
export default class  Moreradio extends React.Component{
    render() {
        // console.log(this.props)
        return(
            <div>
               <button value={"更多电台"} onClick={()=>{
                   this.props.history.push("/Radio")
               }} >更多电台</button>
            </div>
        )
    }
}