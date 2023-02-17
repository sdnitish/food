
import './App.css';
import Nav from './Components/Nav';
import HomeFirstSect from './Components/HomeFirstSect';
import FavApp from './Components/FavApp';
import BrowseMenu from './Components/BrowseMenu';
import AboutUs from './Components/AboutUs';
import BrowseMenu2 from './Components/BrowseMenu2';
import BigBurger from './Components/BigBurger';
import Testimonial from './Components/Testimonial';
import Home from './Home';
import About from './About';
import Menu from './Menu';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="menu" element={ <Menu/> } />
      </Routes>

  );
}

export default App;
