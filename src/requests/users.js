import axios from '../config/axios';


export default async function getUserById(id) {
    const user = await axios.get('/users/'+id).then(response => response.data).catch(()=> []);

    return user;
}