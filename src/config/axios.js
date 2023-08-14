import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.gerubak.online/v1/",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export default instance;
