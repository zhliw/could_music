import React from 'react';
import "../../assets/css/cloudVillage/square.scss"
import CloudVillageVideo from './Video'
import {Link, Route} from 'react-router-dom';

export default class NewMV extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     i:1
        // }
    }

    render() {
        return (
            <div className={"c-m-list"}>
                {
                    this.props.newMV.map((v, i) => {
                        return (
                            <div className={"mv-list"} key={i}>
                                <Link to={"/village/video/" + v.id}>
                                    <img style={{width: "3.34rem",height:"auto"}} src={v.cover} alt=""/>
                                </Link>
                                <div className={"mv-list-b"}>
                                    <p className={"mv-name"}>
                                        {v.briefDesc} || {v.name}
                                    </p>
                                    <div className={"mv-"}>
                                        <img style={{width: ".28rem", borderRadius: "50%", display: "inlineBlock"}}
                                             src=""
                                             alt=""/>
                                        <span className={"mv-artistName"}>{v.artistName}</span>
                                        <span className={"iconfont right"}>&#xe620;</span>
                                        <span className={"mv-playCount right"}>赞</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getNewMV();
        var timer,i=1;
        document.getElementsByClassName("cv-scroll")[0].onscroll=()=>{
            if(Math.ceil(this.getScrollTop()) + this.getClientHeight() >= this.getScrollHeight()){
                ++i
                this.props.getNewMV(i);
            }else {
                this.setState({
                    isLoading:false
                })
            }
        }

    }

    componentWillUpdate() {
        console.log(1111, this.props.newMV);
    }


    getScrollTop(){
        var scrollTop = 0;
        if(document.getElementsByClassName("cv-scroll")[0] && document.getElementsByClassName("cv-scroll")[0].scrollTop) {
            scrollTop = document.getElementsByClassName("cv-scroll")[0].scrollTop;
        } else if(document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
    getClientHeight() {
        var clientHeight = 0;
        if(document.body.clientHeight && document.getElementsByClassName("cv-scroll")[0].clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.getElementsByClassName("cv-scroll")[0].clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.getElementsByClassName("cv-scroll")[0].clientHeight);
        }
        return clientHeight;
    }
    getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.getElementsByClassName("cv-scroll")[0].scrollHeight);

    }
}