import React from "react";
import VideoItem from "./VideoItem";

  const VideoList = ({videos,handleSelectedVideo}) =>{
   const videosList = videos.map(video=>{
       return <VideoItem key={video.id.videoId} video={video} handleSelectedVideo={handleSelectedVideo}/>
   });
    return (
        <div className="ui relaxed divided list">
            {videosList}
            <p> We have {videos.length} videos</p>
        </div>
    )
};
 export default VideoList;
