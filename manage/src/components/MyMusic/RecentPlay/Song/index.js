import React from "react"
import MusicTag from "../../Songlist/MusicTag"

export default class Song extends React.Component {
    render() {
        // console.log(this.props.recentPlay, 22222222222);
        return (
            <>
                {
                    this.props.recentPlay ? <div>
                        <div>播放全部(共{this.props.recentPlay.length}首)</div>
                        {
                            this.props.recentPlay.map((v, i) => {
                                return (
                                    <MusicTag {...v.song} key={i}></MusicTag>
                                )

                            })
                        }
                    </div> : null
                }
            </>
        )
    }
}