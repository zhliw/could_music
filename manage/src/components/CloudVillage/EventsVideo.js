import React from "react";

export default class EventsVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoUrl: "",
            songUrl: "",
            mvUrl: ""
        }
    }

    render() {
        return (
            this.props.id.song ? <audio style={{width: "5.83rem"}} controls src={this.state.songUrl}></audio> :
                <video style={{width: "5.83rem"}} controls src={this.state.videoUrl || this.state.mvUrl}></video>
        );
    }

    componentDidMount() {
        if (this.props.id.video || this.props.id.event) {
            let  id;
            if(this.props.id.video) id=this.props.id.video.videoId;
            else id=JSON.parse(this.props.id.event.json).video.videoId;
            this.axios.get("/video/url?id=" + id).then((videoUrl) => {
                this.setState({
                    videoUrl: videoUrl.urls[0].url
                })

            })
        }
        else if (this.props.id.song) {
            this.axios.get("/song/url?id=" + this.props.id.song.id).then(({data}) => {
                this.setState({
                    songUrl: data[0].url
                })
            })
        } else if (this.props.id.mv) {
            this.axios.get("/mv/url?id=" + this.props.id.mv.id).then(({data}) => {
                this.setState({
                    mvUrl: data.url
                })
            })
        }

    }
}