import logo from './logo.svg';
import './App.css';
import Poster from './poster';
import movieData from './MovieData';


function App() {
  return (
    <div className="App">
      {movieData.movies.map((movie, index) => (
        <Poster key={index} title={movie.title} image={movie.poster_path} />
      ))}
    </div>
  );
}

export default App;

