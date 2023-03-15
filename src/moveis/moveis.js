import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axiosIns from '../axiosConfig/axiosInctance';
import { addMovieToFavorites } from '../store/action';
import changehome from '../store/actionHome';
// import changehome from '../store/actionHome';

function Moveis() {
    const [Movies, setMoviesCard] = useState([]);
    const [page, setMoviespage] = useState(1);
    const dispatch =useDispatch()
const urlImg="https://image.tmdb.org/t/p/w500/"
      const home = useSelector((state) => state)
      useEffect(() => {
          dispatch(changehome())
      
//  axiosIns.get(
//             `/popular?&page=${page}`
//           )
//           .then((res) => {
           
//              setMoviesCard(res.data.results);
           
//           })
//           .catch((err) => {
//             console.log(err);
//           });
        
      }, []);
      const handlePrevPage = () => {
        setMoviespage(prePage=>prePage - 1);
      };
    
    const handleNextPage=()=>{
      setMoviespage(nxtPage => nxtPage + 1)
    }

    const add =(z)=>{
      dispatch(addMovieToFavorites(z))
      console.log(z);
    }
    // console.log(home);

  return (
    <div className='Container'>
        <div className='row '>
        {home.map((movie) =>(

<Card className='m-3' style={{ width: '18rem' }}>
<i class="fa-solid fa-star fa-2x starIcon text-warning " onClick={()=>add(movie)} ></i>
<div className="w-100" key={movie.id}/>
  <Card.Img variant="top" src={`${urlImg}${movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
))}
</div>
    </div>
  )
}
export default Moveis