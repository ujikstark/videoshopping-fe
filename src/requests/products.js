import axios from '../config/axios';

export async function getProductsByVideoId(id) {
    const products = await axios.get('/videos/'+id+'/products').then(response => response.data).catch(()=> []);

    return products;
   
}