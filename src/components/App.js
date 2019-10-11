import React from 'react';
import {Container, Grid} from "semantic-ui-react";
import SearchBar from './SearchBar';
import VideoList from "./VideoList";
import youtube from '../api/youtube'
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [], 
        selectedVideo: null
    };
    
    componentDidMount() {
        this.handleOnSubmit('programming');
    }

    handleOnSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };
    
    render() {
        return(
            <Container>
                <SearchBar handleOnSubmit={this.handleOnSubmit}/>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <VideoDetail video={this.state.selectedVideo} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <VideoList 
                                        handleVideoSelect = {this.handleVideoSelect}
                                        videos={this.state.videos} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
        )
    }
}

export default App;