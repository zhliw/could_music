import React from 'react';
import "../../assets/css/cloudVillage/square.scss"
import CloudVillageVideo from './Video'
import {Link, Route} from 'react-router-dom';

export default class NewMV extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [];
        this.minIndex = 0;
        this.state={
            i:1
        }
    }
    render() {
        return (
            <div className={"c-m-list"}>
                <div className={"c-m-list-left"}></div>
                <div className={"c-m-list-right"}></div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getNewMV(1,this);
        console.log(this.props.newMV)
        //  下拉加载  ***********************************************************************
        var timer;
        document.getElementsByClassName("cv-scroll")[0].onscroll = () => {
            if (Math.ceil(this.getScrollTop()) + this.getClientHeight() >= this.getScrollHeight()) {
                this.setState({
                    i:this.state.i+1
                },()=>{
                    console.log(9,this.props.newMV)
                    this.props.getNewMV(this.state.i,this);
                })
            } else {
                this.setState({
                    isLoading: false
                })
            }
        }
        //    ***********************************************************************
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(1244,JSON.stringify(this.props.newMV) == JSON.stringify(nextProps.newMV))
    //     // console.log(3333333,JSON.stringify(this.props.newMV),JSON.stringify(nextProps.newMV))
    //     if (JSON.stringify(this.props.newMV) == JSON.stringify(nextProps.newMV)){
    //         return false;
    //     } else return true;
    // }

    //  瀑布流  ***********************************************************************
    initMin() {
        this.columns = [document.getElementsByClassName("c-m-list-left")[0].clientHeight, document.getElementsByClassName("c-m-list-right")[0].clientHeight];
        let min = Math.min(this.columns[0], this.columns[1])
        //最小值下标
        this.minIndex = this.columns.findIndex((v, i) => v === min)
    }

    waterfall(data) {
        let arr = data.slice(-10);
        arr.map((v, i) => {
                    this.initMin();
                    let minHeight;
                    if (this.minIndex / 1 === 0) {
                        minHeight = document.getElementsByClassName("c-m-list-left")[0];
                    } else {
                        minHeight = document.getElementsByClassName("c-m-list-right")[0];
                    }
                    let _div = `<div class="mv-list">
                                <a href="/village/video/`+ v.id+`">
                                    <img src=`+v.cover+` alt=""/>
                                </a>
                                <div class="mv-list-b">
                                    <p class="mv-name">`+ ( v.briefDesc || v.name)+`</p>
                                    <div class="mv-list-user">
                                        <img src=`+v.cover+`
                                             alt=""/>
                                        <span class="mv-artistName">`+v.artistName+`</span>
                                        <span class="iconfont right">&#xe620;</span>
                                        <span class="mv-playCount right">赞</span>
                                    </div>
                                </div>
                            </div>`;
                    minHeight.innerHTML+=_div;
                })
    }

    componentWillMount() {
      this.props.del()
    }

    //  下拉加载  ***********************************************************************

    getScrollTop() {
        var scrollTop = 0;
        if (document.getElementsByClassName("cv-scroll")[0] && document.getElementsByClassName("cv-scroll")[0].scrollTop) {
            scrollTop = document.getElementsByClassName("cv-scroll")[0].scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.getElementsByClassName("cv-scroll")[0].clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.getElementsByClassName("cv-scroll")[0].clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.getElementsByClassName("cv-scroll")[0].clientHeight);
        }
        return clientHeight;
    }

    getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.getElementsByClassName("cv-scroll")[0].scrollHeight);

    }

    //    ***********************************************************************

}


