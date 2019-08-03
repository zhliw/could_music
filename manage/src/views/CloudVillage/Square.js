import React from "react";
import "../../assets/css/cloudVillage/square.scss";
import {
    connect
} from 'react-redux';
import {bindActionCreators} from "redux"
import cloudVillageCreator from '../../store/actionCreator/CloudVillage'
import cloudVillage from "../../store/reducers/CloudVillage";

class Square extends React.Component {
    constructor(){
        super();
        this.state={
            _time:{}
        }
    }
    render() {
        let hotComments = this.props.hotComments || []
        return (
            <div className={"cloudVillage-square"}>
                <div className={"cloudVillage-hot-comments"}>
                    <div className={"cloudVillage-hot-comments-l"}>
                        <p className={"c-h-c-l-top"}>云村热评墙 ></p>
                        <div className={"cloudVillage-hot-comments-list"}>
                            {
                                hotComments.map((v, i) => {
                                    return (
                                        <p key={i}>
                                            <img style={{width: ".28rem", borderRadius: "50%"}}
                                                 src={v.user.avatarUrl}></img> {v.content}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={"cloudVillage-hot-comments-r"}>
                        <div className={"c-month"}>
                            {
                                this.state._time._month
                            }
                        </div>
                        <div className={"c-day"}>
                            {
                                this.state._time._day
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getHotComments();
        function time() {
            let _date = new Date();
            let _month = _date.getMonth();
            let _day = _date.getDate().toString().padStart(2, "0");
            switch (_month) {
                case 0 :
                    _month = "Jan"
                    break;
                case 1 :
                    _month = "Feb"
                    break;
                case 2 :
                    _month = "Mar"
                    break;
                case 3 :
                    _month = "Apr"
                    break;
                case 4 :
                    _month = "May"
                    break;
                case 5 :
                    _month = "Mar"
                    break;
                case 6 :
                    _month = "Jun"
                    break;
                case 7 :
                    _month = "Aug"
                    break;
                case 8 :
                    _month = "Sep"
                    break;
                case 9 :
                    _month = "Oct"
                    break;
                case 10 :
                    _month = "Nov"
                    break;
                case 11 :
                    _month = "Dec"
                    break;
            }
            return {
                _month,_day
            }
        }
        let _time=time();
        this.setState({
            _time
        })
    }
}

export default connect((state) => ({hotComments: state.cloudVillage.hotComments}), (dispatch) => bindActionCreators(cloudVillageCreator, dispatch))(Square)