import logo from './logo.svg';
import './App.css';
import Poster from './poster';
import movieData from './MovieData';

function App() {

  return (
    <div className="App">
        <Poster title={movieData.movies[0].title} image={movieData.movies[0].poster_path}/>
    </div>
  );
}

export default App;
