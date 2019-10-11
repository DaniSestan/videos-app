import axios from 'axios';

const KEY = 'AIzaSyASZRUajy6L20IJ89qh4Uwe77Hk65Ai-7Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});