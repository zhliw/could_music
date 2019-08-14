import React from "react"
import "../../../../../assets/css/MyMusic/dj.css"
// import { Modal, Button } from 'antd';



// const { confirm } = Modal;
// confirm({
//     title: '确定订阅该电台吗?',
//     okText:'不再订阅',
//     cancelText:'确定',
//     onOk() {
//         return new Promise((resolve, reject) => {
//             setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//         }).catch(() => console.log('Oops errors!'));
//     },
//     onCancel() {},
// });
export default class DetailHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        // console.log(this.props.djdetail, 333333555)
        return (
            <div className={"detailHeader"} >
                {
                    this.props.djdetail.djRadio?  <div className={"detailImg"}>
                        <div style={{height:"1rem",position:"absolute",top:"0",left:"0",width:"100%",background:"rgba(0,0,0,0.5)"}}>
                            <div className={"detailTop iconfont icon-fanhui"}  onClick={()=>window.history.go(-1)} ><span>电台</span></div>
                        </div>
                        <div  className={"detailPic"}>
                            <img src={this.props.djdetail.djRadio.picUrl}/>
                        </div>
                        <div className={"djDetail"}>
                            <div className={"djDetailName"}>{this.props.djdetail.djRadio.name}</div>
                            <div className={"djDetailOrder"}>{this.props.djdetail.djRadio.subCount}人已订阅</div>
                            {/*<div className={"subscribe"} >已订阅</div>*/}
                            <div className={"subscribe"}>{this.props.djdetail.djRadio.subed?"已订阅":"订阅"}</div>
                        </div>

                    </div>:null
                }



            </div>
        )
    }
}