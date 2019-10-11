import React from 'react';
import {Divider, Image, Grid, Header} from "semantic-ui-react";
import './VideoItem.css';

class VideoItem extends React.Component {
    render() {
        const video = this.props.video;
        const handleVideoSelect = this.props.handleVideoSelect;

        return(
            <div>
                <Grid >
                    <Grid.Column width={4}>
                        <div onClick={() => handleVideoSelect(video)}>
                            <Image src={video.snippet.thumbnails.medium.url} 
                                   size='large'/>
                        </div> 
                    </Grid.Column>
                    <Grid.Column width={12} >
                        <Header size="medium" className="video-item">{video.snippet.title}</Header>
                    </Grid.Column>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default VideoItem;