import React, {Component} from "react"
import InputField from "../imageapp/InputField";
import SearchBar from "./SearchBar";
import youtubeApi from './api/Youtube'
import VideoList from './VideoList'
import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";

class VideoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {videos:[], selectedVideo:null}
    }

    componentDidMount() {
        this.handleTermSubmit('buildings');
    }

    handleTermSubmit = async (term) =>{
        try {
            const response = await youtubeApi(term);
            const results = await response.json();
            this.setState({videos:results.items,selectedVideo:results.items[0]});

        } catch (e) {
            alert(e.message)
        }

    };

    handleSelectedVideo = (videoDetail) =>{
        this.setState({selectedVideo:videoDetail})

    };

    render() {
        return (
            <div className="ui container">
                <p>Video App</p>
                <SearchBar handleTermSubmit={this.handleTermSubmit}/>
                <div className="ui grid">
                  <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList handleSelectedVideo={this.handleSelectedVideo}
                               videos={this.state.videos} />
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default VideoApp;
