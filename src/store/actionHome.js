import axios from "axios";
import { useState } from "react";
import axiosIns from "../axiosConfig/axiosInctance";

function changehome() {
    console.log("hu");
    return (dispatch)=>{
 return axios.get(
" https://api.themoviedb.org/3/movie/popular?api_key=bf86013c066ab4c5f8ff00b2549cde1f"
  )
  .then((res) => {
   console.log(res);
    //  setMoviesCard(res.data.results);
   dispatch({type:'SET_HOME',payload:res.data.results})
   
  })
  .catch((err) => {
    console.log(err);
  });
// axiosIns.get(
//             `/popular?&page=${page}`
//           )
//           .then((res) => {
           
//             //  setMoviesCard(res.data.results);
//            dispatch({type:'SET_HOME',payload:res.data.results})
//           })
//           .catch((err) => {
//             console.log(err);
//           });
    }

    
    
}
export default changehome