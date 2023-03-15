import React from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeMovieFromFavorites } from '../store/action';


const urlImg="https://image.tmdb.org/t/p/w500/"

 function FavoritesMovies() {
   const favorites=useSelector((state) => state.favorites)
   const count=useSelector((state) => state.count)

   const dispatch =useDispatch();

   const Remove = (movie) => {
    dispatch(removeMovieFromFavorites(movie.id));
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className='Container'>
        <div className='row '>
        {favorites.map((movie) =>(
 <Card className='m-3' style={{ width: '18rem' }}>
   <i class="fa-solid fa-trash fa-2x starIcon text-warning text-center    position-absolute py-3 rounded-4" key={movie  .id} onClick={()=>Remove(movie)}></i>
  <Card.Img variant="top" src={`${urlImg}${movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.overview}
    </Card.Text>
  </Card.Body>
</Card>
))}
</div>
    </div>
    </div>
  )
}
export default FavoritesMovies