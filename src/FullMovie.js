import './FullMovie.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FullMovie() {
    const [movieDetails, setMovieDetails] = useState({})
    const [error, setError] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then((response) => {
          if (response.ok) {
              return response.json();
            } else {
              throw new Error('Server Error!');
            }
          })
          .then((details) => {
             setMovieDetails(details.movie);
          })
          .catch((error) => {
            setError(error.message);
            console.error('Error fetching data:', error);
          });
        }, [id])
    
      if(error){
        return <div className='App'>Error: {error}</div>
      }

    return (
        <h1>{movieDetails.release_date}</h1>
    )
}

export default FullMovie;