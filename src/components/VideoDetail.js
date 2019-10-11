import React from 'react';
import {Segment, Header, Embed} from "semantic-ui-react";

class VideoDetail extends React.Component{
    render() {
        const video = this.props.video;
        
        if(this.props.video !== null) {
            return (
                <div>
                    <Embed
                        id={video.id.videoId}
                        placeholder={video.snippet.thumbnails.high.url}
                        source='youtube'
                    />
                    <Segment>
                        <Header size='medium'>
                          {video.snippet.title}
                        </Header>
                        <p>{video.snippet.description}</p>
                    </Segment>
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
    
}

export default VideoDetail;