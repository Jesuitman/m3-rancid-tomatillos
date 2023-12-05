import logo from './logo.svg';
import './App.css';
import Poster from './poster';
import { useState, useEffect } from 'react';


function App() {
  const [movieData, setMovieData] = useState([]);
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
      <div className="header">
        <h1 className="header-title">Rancid Tomatillos</h1>
        <div className="buttons-container">
          <button className="filter-button">Action</button>
          <button className="filter-button">Adventure</button>
          <button className="filter-button">Super Hero</button>
          <button className="filter-button">Sci Fi</button>
          <button className="filter-button">Rom Com</button>
        </div>
      </div>
      {movieData.map((movie) => (
        <Poster id={movie.id} title={movie.title} image={movie.poster_path}/>
      ))}
    </div>
  );
}
// onClick={() => handleFilter('action')
export default App;
