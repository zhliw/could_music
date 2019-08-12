import React from "react"
import OrderDj from "../OrderDj"

export default class CreateDj extends React.Component {
    render() {
        return (
            <div>
                <div className={"returnDj iconfont icon-fanhui"} onClick={() => {
                    window.history.go(-1)
                }}>我的电台
                </div>
                <div className={"create"}>
                <h4>我创建的电台</h4>
                <div>申请做主播</div>
                </div>
                <OrderDj></OrderDj>
            </div>
        )
    }
}