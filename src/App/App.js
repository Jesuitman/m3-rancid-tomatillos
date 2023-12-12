import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FullMovie from '../FullMovie/FullMovie';
import Home from '../Home/Home';

function App() {

  return (
    <div className="App">
      <Link to={'/'}><h1 className="header-title">Rancid Tomatillos</h1></Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<FullMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
