import axios from "axios";

const axiosIns = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        'api_key':'bf86013c066ab4c5f8ff00b2549cde1f'
    }
})

axiosIns.interceptors.request.use((config)=>{

   
    return config;
},(err)=>{

    return Promise.reject(err);
})

axiosIns.interceptors.response.use((res)=>{
    
    return res;

},(err)=>{
    
    return Promise.reject(err);

})

export default axiosIns