import React from 'react';
import Nav from './Components/Nav';
import HomeFirstSect from './Components/HomeFirstSect';
import FavApp from './Components/FavApp';
import BrowseMenu from './Components/BrowseMenu';
import AboutUs from './Components/AboutUs';
import BrowseMenu2 from './Components/BrowseMenu2';
import BigBurger from './Components/BigBurger';
import Testimonial from './Components/Testimonial';

const Home = () => {
  return (
    <>
<Nav/>
    <HomeFirstSect/>
    <FavApp/>
    <BrowseMenu/>
    <AboutUs/>
    <BrowseMenu2/>
    <BigBurger/>
    <Testimonial/>
    </>
  )
}

export default Home;