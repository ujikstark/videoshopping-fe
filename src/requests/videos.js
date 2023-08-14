import axios from '../config/axios';

export async function getVideos() {
    const videos = await axios.get('/videos').then(response => response.data).catch(()=> []);

    return videos;
   
}

export async function getVideoById(id) {
    const video = await axios.get('/videos/'+id).then(response => response.data).catch(() => []);

    return video;
}