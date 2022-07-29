import React from 'react'
import Header from '../Components/Header';

import CaptionCarousel from '../Components/CaptionCarousel';

// import {SimpleSlider} from '../Components/SimpleSlider';

import FeaturedCollections from '../Components/FeaturedCollections';
import Months from '../Components/Months';
const Home = () => {
  return (
    <div>
       <Header/>

        <CaptionCarousel/>

        {/* <SimpleSlider/> */}

        <FeaturedCollections/>
        <Months/>
    </div>
  )
}

export default Home
