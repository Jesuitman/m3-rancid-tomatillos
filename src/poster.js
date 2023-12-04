import { useState, useEffect } from 'react';
import PosterBack from './PosterBack';
import './poster.css';

function Poster({ key, title, image }) {
    // const [movieDetails, setMovieDetails] = useState([]);
    // const [error, setError] = useState(null);
    const [flipped, setFlipped] = useState(false)

    const handleFlip = () => {
        setFlipped(!flipped);
      };

    // useEffect(() => {
    //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${key}`)
    //     .then((response) => {
    //       if (response.ok) {
    //           return response.json();
    //         } else {
    //           throw new Error('Server Error!');
    //         }
    //       })
    //       .then((details) => {
    //         setMovieDetails(details.movies);
    //       })
    //       .catch((error) => {
    //         setError(error.message);
    //         console.error('Error fetching data:', error);
    //       })

    // }, [])

    // if(error){
    //     return <div className='BackError'>Error: {error}</div>
    // }
    
    return (
        <div className='Poster' onClick={handleFlip}>
          <div className={`Poster-Container ${flipped ? 'Poster-Flip' : ''}`}>
            <div className="Poster-Front">
              <img className='Poster-Image' src={image} alt={title} />
            </div>
              {/* <PosterBack release={movieDetails.release_date}/> */}
          </div>
        </div>
    );
}

export default Poster;