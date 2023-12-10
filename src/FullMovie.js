import './FullMovie.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'

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
          throw new Error(`${id} is not a valid movie ID! Try again?`);
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

  if (error) {
    return <h1 className='App'>Error: {error}</h1>
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${movieDetails.backdrop_path})`
  }

  FullMovie.propTypes = {
    id: PropTypes.number.isRequired, 
  };

  return (
    <div className='background' style={backgroundImageStyle}>
      <div className='movie-container'>
        <div className='movie-details-box'>
          <div className='sections-container'>
            <section className='title-box'>
              <h1>{movieDetails.title}</h1>
              <h3>{movieDetails.tagline}</h3>
            </section>
            <section className='poster-section'>
              <div className='poster-container'>
                <img
                  src={movieDetails.poster_path}
                  alt={movieDetails.title}
                  className='poster'
                />
              </div>
              <div className='details-section'>
                <p>Rated: {movieDetails.average_rating}/10</p>
                <p>Release Date: {movieDetails.release_date}</p>
                <p>Run Time: {movieDetails.runtime}</p>
              </div>
            </section>
            <section className='overview-section'>
              <p>{movieDetails.overview}</p>
              <p>Budget: ${movieDetails.budget}</p>
              <p>Revenue: ${movieDetails.revenue}</p>
              <p>Profit: ${movieDetails.revenue - movieDetails.budget}</p>
            </section>
            <section className='trivia-section'>
              <h2>Personal Thoughts of Brendan and Lex</h2>
              {movieDetails.average_rating >= 9 ? (
                <p>We think that this movie is stellar!</p>
              ) : movieDetails.average_rating >= 7 ? (
                <p>We thought this movie was great!</p>
              ) : movieDetails.average_rating >= 5 ? (
                <p>We thought this was just okay...</p>
              ) : (
                <p>This movie is terrible!</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMovie