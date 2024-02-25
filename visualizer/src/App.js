import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Visualizer from './visualizer';
function App() {
  
  return (
    <BrowserRouter>

    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="/" className='navbar-logo'>
          Neon Waves  <i className='fab fa-typo3' />
        </a>
        <div className='visual'>
          <Visualizer/>
        </div>
        <u1>
        <li className='nav-item'>
            <a href="/" className="nav-links">
              Home 
            </a>
          </li>
          <li className='nav-item'>
            <a href="/Search" className="nav-links">
              Search 
            </a>
          </li>
        </u1>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (

      <div className="home-container">
      <h1 class = 'center'>
        AUDIO VISUALIZATION
      </h1>
      </div>

  );
}

export default App;
