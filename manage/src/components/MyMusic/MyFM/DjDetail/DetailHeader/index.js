import React from "react"
import "../../../../../assets/css/MyMusic/dj.css"
export default class DetailHeader extends React.Component {
    render() {
        // console.log(this.props.djdetail.djRadio, 333333555)
        return (
            <div className={"detailHeader"} >
                {
                    this.props.djdetail.djRadio?  <div className={"detailImg"}>
                        <div className={"detailTop"} onClick={()=>window.history.go(-1)} >返回<span>电台</span></div>
                        <div  className={"detailPic"}>
                            <img src={this.props.djdetail.djRadio.picUrl}/>
                        </div>
                        <div className={"djDetail"}>
                            <div className={"djDetailName"}>{this.props.djdetail.djRadio.name}</div>
                            <div className={"djDetailOrder"}>{this.props.djdetail.djRadio.subCount}人已订阅</div>
                            <div className={"subscribe"}>已订阅</div>
                        </div>

                    </div>:null
                }



            </div>
        )
    }
}