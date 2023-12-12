import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FullMovie from '../FullMovie/FullMovie';
import Home from '../Home/Home';

function App() {

  return (
    <div className="App">
      <h1 className="header-title"><Link to={'/'}><p>Rancid Tomatillos</p></Link></h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<FullMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
