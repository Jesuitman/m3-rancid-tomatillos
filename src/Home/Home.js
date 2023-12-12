import './Home.css';
import { useState, useEffect} from 'react';
import Poster from '../Poster/poster';

function Home() {
    const [movieData, setMovieData] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([])
    const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Server Error!');
        }
      })
      .then((data) => {
        setMovieData(data.movies);
        setFilteredMovies(data.movies)
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error fetching data:', error);
      });
  }, []);


  const filterByRating = (minRating, maxRating) => {
    const filtered = movieData.filter(
      (movie) => movie.average_rating >= minRating && movie.average_rating <= maxRating
    );
    setFilteredMovies(filtered);
  };

  if(error){
    return <div className='App'>Error: {error}</div>
  }

    return (
       <div className='Home'>
        <div className="header">
        <h3 className='header-guide'>Show me....</h3>
        <div className="buttons-container">
          <button className='filter-button' onClick={() => filterByRating(1, 2)}>Rancid Movies</button>
          <button className='filter-button' onClick={() => filterByRating(3, 4)}>Okay Movies</button>
          <button className='filter-button' onClick={() => filterByRating(5, 6)}>Good Movies</button>
          <button className='filter-button' onClick={() => filterByRating(7, 8)}>Great Movies</button>
          <button className='filter-button' onClick={() => filterByRating(9, 10)}>Excellent Movies</button>
          <button className='filter-button' onClick={() => setFilteredMovies(movieData)}>Show All Movies</button>
        </div>
      </div>
      {filteredMovies.map((movie) => (
        <Poster
          id={movie.id}
          key={movie.id}
          title={movie.title}
          image={movie.poster_path}
        />
      ))}
    </div>
    )
}

export default Home;