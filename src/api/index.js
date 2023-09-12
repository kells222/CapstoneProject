import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products'




// export async function getAllPosts(){
//     try {
//         const response = await fetch(BASE_URL)
//         if(!response.ok){
//             throw {message: 'failed to get products'}
//         };
//         const result = await response.json();
//     //    console.log (result);
//        return result;

//     } catch (error) {
//         console.error('oh no', error)
//     }
// }
// getAllPosts();

// export async function getProductId(productId){
//     try {
//         const response = await fetch(`${BASE_URL}/${productId}`)

//     } catch (error) {
        
//     }
// }