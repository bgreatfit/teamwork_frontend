import React from "react";
import "./VideoItem.css"
const handleClick = (snippet)=>{
    console.log('click', snippet)

};
  const VideoItem = ({video, handleSelectedVideo}) =>{
      const {snippet} = video;
      console.log('item', video);
    return (
        <div className="video-item item" onClick={(e)=>handleSelectedVideo(video)}>
            <img className="ui avatar" alt={snippet.description} src={snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{snippet.title}</div>

            </div>
        </div>
    )
};
 export default VideoItem;
