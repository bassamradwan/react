// import React, { useEffect } from 'react'
// import { Button, Card } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux'
// import changehome from '../store/actionHome';

// function Home() {
//     const urlImg="https://image.tmdb.org/t/p/w500/"
//     const dispatch = useDispatch()
//     const home = useSelector((state) => state.home)
//     useEffect(() => {
//         dispatch(changehome())
//     }, []);
//     return (
//         <div className='Container'>
//             <div className='row '>
//                 {home.map((movie) => (

//                     <Card className='m-3' style={{ width: '18rem' }}>
//                         <i class="fa-solid fa-star fa-2x starIcon text-warning " ></i>
//                         <div className="w-100" key={movie.id} />
//                         <Card.Img variant="top" src={`${urlImg}${movie.poster_path}`} />
//                         <Card.Body>
//                             <Card.Title>{movie.title}</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the bulk of the card's content.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default Home
