
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Politics from './components/Politics';
import Sport from './components/Sport';
import Media from './components/Media';
import Economy from './components/Economy'
import MainPage from './components/MainPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className='Main-banner'>
        <div className='Navlink-bar'>
          <NavLink exact to="/">MAIN</NavLink>
          <NavLink to="/politics">POLITICS</NavLink>
          <NavLink to="/sport">SPORT</NavLink>
          <NavLink to="/media">MEDIA</NavLink>
          <NavLink to="/economy">ECONOMY</NavLink> 
        </div>
        <h1>NewsAPP</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/sport" element={<Sport/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/economy" element={<Economy/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
