import React from "react"
import {
    connect
} from "react-redux"
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../../store/actionCreator/MyMusic";
import myMusic from "../../../../store/reducers/MyMusic"
import DjDetail from "../DjDetail"
class OrderDj extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getSublist();
    }

    render() {

        let sublist = this.props.sublist || [];
        return (
            <div className={"orderDj"}>
                {
                    sublist.count>0 ? (<div className={"sublist"} >
                        <h3>我订阅的电台({sublist.count})</h3>
                        {
                            sublist.djRadios.map((v, i) => {
                                return (
                                    <div key={i} className={"sublistWrap"} onClick={()=>{
                                        this.props.history.push("/DjDetail",sublist.djRadios[i].id)
                                        }}>
                                        <div className={"sublistImage"}>
                                            <img src={v.picUrl}/>
                                            {
                                               v.newProgramCount? <span>{v.newProgramCount}</span>:null
                                            }

                                        </div>
                                        <div className={"sublistContent"}>
                                            <div className={"sublistContentName"}>{v.name}</div>
                                            <span>by{v.dj.nickname}</span>
                                            <div className={"sublistContentText"}>{v.lastProgramName}</div>
                                        </div>
                                        {/*<div className={"sublistEdit"}>*/}
                                        {/*    删除*/}
                                        {/*</div>*/}
                                    </div>
                                )

                            })
                        }
                    </div> ):<div className={"noOrder"}>暂无订阅</div>
                }
            </div>
        )
    }
}

export default withRouter(connect((state) => ({sublist: state.myMusic.sublist}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(OrderDj));