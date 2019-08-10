import  React from "react"
import DjDetail from "../DjDetail"
import {
    connect
} from "react-redux"
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../../store/actionCreator/MyMusic";
import myMusic from "../../../../store/reducers/MyMusic"
class Recommend extends React.Component{
    componentDidMount() {
        this.props.getCommend();
    }
    constructor() {
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount() {
        this.props.getSublist();
    }
    render(){
        // console.log(this.props)
        return(
            <div className={"djTuijian"}>
                <h3>为你推荐</h3>
                <div className={"tuijianShow"}>
                    {
                        this.props.recommend.map((v, i) => {
                            return (
                                <div className="recommend" key={i} onClick={()=>{
                                    this.props.history.push("/DjDetail",v.id)
                                }}>
                                    <p className="coverImage"><img src={v.picUrl} /></p>
                                    <p className="imageIntro">{v.rcmdText}</p>
                                </div>
                            )

                        })
                    }
                </div>

            </div>
        )
    }
}
export default withRouter(connect((state) => ({sublist: state.myMusic.sublist}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(Recommend));
