import React, {Component} from "react";


class VideoDetail extends Component{

    constructor(props) {
        super(props);
    }

    render() {


        if(!this.props.selectedVideo){
            return <div> Loading..</div>
        }
        const videoSource = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
        const header = this.props.selectedVideo.snippet.title;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="Video Player"  src={videoSource} />
                </div>
                <div className="header">{header} </div>

            </div>
        )

    }
}
export default VideoDetail
