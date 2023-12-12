import './App.css';
import { Routes, Route } from 'react-router-dom';
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
