import { useState, useEffect } from 'react';
import PosterBack from './PosterBack';
import './poster.css';

function Poster({ title, image, id }) {
    const [movieDetails, setMovieDetails] = useState({})
    const [flipped, setFlipped] = useState(false)
    const [error, setError] = useState(null);

    const handleFlip = () => {
        setFlipped(!flipped);
        getDetails()
      };
    
    function getDetails() {
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
          })
    }

    if(error){
      return <div className='App'>Error: {error}</div>
    }
    
    return (
        <div className='Poster' id={id} onClick={handleFlip}>
          <div className={`Poster-Container ${flipped ? 'Poster-Flip' : ''}`}>
            <div className="Poster-Front">
              <img className='Poster-Image' src={image} alt={title} />
            </div>
              {flipped && <PosterBack title={title} release={movieDetails.release_date}
              rating={movieDetails.average_rating}/>}
          </div>
        </div>
    );
}

export default Poster;
