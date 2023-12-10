# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import FullMovie from './FullMovie';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<FullMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './Home.css';
import { useState, useEffect} from 'react';
import Poster from './poster';

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
      (movie) => movie.rating > minRating && movie.rating <= maxRating
    );
    console.log(filteredMovies)
    setFilteredMovies(filtered);
  };

  if(error){
    return <div className='App'>Error: {error}</div>
  }

    return (
       <div className='Home'>
        <div className="header">
        <h1 className="header-title">Rancid Tomatillos</h1>
        <h3 className='header-title'>Show me....</h3>
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
              rating={movieDetails.average_rating} id={id}/>}
          </div>
        </div>
    );
}

export default Poster;

import { useState } from 'react';
import './PosterBack.css'
import { Link } from 'react-router-dom';

function PosterBack({ title, release, rating, id }) {
    return (
        <div className='Poster-Back'>          
            <Link to={`/${id}`}><h2>{title}</h2></Link>
            <h3>Average Rating: {rating}</h3>
            <h3>Release Date: {release}</h3>
        </div>
    )
}

export  default  PosterBack;

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

      const backgroundImageStyle = {
        backgroundImage: `url(${movieDetails.backdrop_path})`
      }

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
                    <p>I think that this movie is stellar!</p>
                  ) : movieDetails.average_rating >= 7 ? (
                    <p>I thought this movie was great!</p>
                  ) : movieDetails.average_rating >= 5 ? (
                    <p>I thought this was just okay...</p>
                  ) : (
                    <p>This movie is terrible!</p>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      );}

export default FullMovie