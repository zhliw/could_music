import React from "react"
import OrderDj from "../OrderDj"
export default class  CreateDj extends React.Component{
    render() {
        return(
            <div>
                <h4>我创建的电台</h4>
                <div>申请做主播</div>
                <OrderDj></OrderDj>
            </div>
        )
    }
}