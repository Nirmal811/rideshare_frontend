import axios from 'axios';

const BASE_URL = 'https://ride-share-by-nk.onrender.com';

export async function secrets(){
    return await axios.get(`${BASE_URL}/api/v1/secret/getsecrets`,{
        headers:{
            jwttoken: window.localStorage.getItem('token')
        },
    });
}

export async function addsecrets(data){
    return await axios.post(`${BASE_URL}/api/v1/secret/addsecrets`,data,{
        headers:{
            jwttoken: window.localStorage.getItem('token')
        },
    });
}



