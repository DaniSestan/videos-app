import React from 'react';
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    
    renderedList = () => {
        return this.props.videos.map((video) => {
            return <VideoItem handleVideoSelect={this.props.handleVideoSelect} 
                              video={video} 
                              key={video.id.videoId}/>
        })
    };
    
    render() {
        return (
            <div>{this.renderedList()}</div>
        ) 
    }
}

export default VideoList;