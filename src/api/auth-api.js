import axios from 'axios';

const BASE_URL = 'https://ride-share-by-nk.onrender.com';

export async function login(data){
    return await axios.post(`${BASE_URL}/api/v1/auth/login`, data);
}

export async function register(data){
    return await axios.post(`${BASE_URL}/api/v1/auth/register`,data);
}

// export async function verifyJWT(){
//     // return await axios.get(${BASE_URL}/api/v1/auth/,{
//     //     headers:{
//     //         "Authorization" : localStorage.getItem(userFields.jwtToken)
//     //     },
//     // });
// }