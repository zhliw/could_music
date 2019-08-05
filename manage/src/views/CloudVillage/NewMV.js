import React from 'react';
import "../../assets/css/cloudVillage/square.scss"
import CloudVillageVideo from './Video'
import {Link, Route} from 'react-router-dom';

export default class NewMV extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"c-m-list"}>
                {
                    this.props.newMV.map((v, i) => {
                        return (
                            <div className={"mv-list"} key={i}>
                                <Link to={"/village/video/" + v.id}>
                                    <img style={{width: "3.34rem"}} src={v.cover} alt=""/>
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

    }

    componentWillUpdate() {
        console.log(1111, this.props.newMV);
    }
}