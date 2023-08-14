import axios from '../config/axios';

export async function createComment(data) {
    const payload = {
        username: data.username,
        comment: data.comment,
        videoId: data.videoId
    }

    const newComment = await axios.post('/comments', JSON.stringify(payload)).then(response => response.data).catch(() => null);

    return newComment;
}

export async function getCommentsByVideoId(id) {
    const comments = await axios.get('/videos/'+id+'/comments').then(response => response.data).catch(()=> []);

    return comments;
   
}
