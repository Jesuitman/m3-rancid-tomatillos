import logo from './logo.svg';
import './App.css';
import Poster from './poster';
import { useState, useEffect } from 'react';


function App() {
  const [movieData, setMovieData] = useState([])
  const [error, setError] = useState(null)

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
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error fetching data:', error);
      });
  }, []);

  if(error){
    return <div className='App'>Error: {error}</div>
  }

  return (
    <div className="App">
      {movieData.map((movie) => (
        <Poster key={movie.id} title={movie.title} image={movie.poster_path} />
      ))}
    </div>
  );
}

export default App;

