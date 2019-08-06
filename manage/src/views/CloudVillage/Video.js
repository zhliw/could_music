import React from 'react';
import "../../assets/css/cloudVillage/video.scss"

export default class CloudVillageVideo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pauseBtn:true
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <div className={"cv"}>
                <div className={"cv-video"}>

                    <button className={"iconfont cv-mv-back "} onClick={()=>this.props.history.go(-1)}>&#xe6ac;</button>
                    <video className={"cv-mv-bottom"} src={this.state.data.url}></video>
                    <video className={"cv-mv-top"} src={this.state.data.url} onClick={this.pause.bind(this)}></video>
                    {
                        this.state.pauseBtn?<button className={"iconfont cv-mv-btn"} style={{position:"absolute",zIndex:"6",width:".5rem"}} onClick={this.pause.bind(this)} id={"button"}>&#xe6a4;</button>:null
                    }
                </div>
            </div>

        );
    }
    pause(){
        var videL = document.getElementsByClassName('cv-mv-top')[0];
        var button = document.getElementById('button');
        this.setState({
            pauseBtn: !this.state.pauseBtn
        })
        if (videL.paused){
                videL.play();
                document.getElementsByClassName('cv-mv-bottom')[0].play()

        }
         else {
            videL.pause();
            document.getElementsByClassName('cv-mv-bottom')[0].pause()
        }
    }
    async componentDidMount() {
        const {data} = await this.axios.get("/mv/url?id=" + this.props.match.params.id)
        this.setState({
            data
        })



    }
}
