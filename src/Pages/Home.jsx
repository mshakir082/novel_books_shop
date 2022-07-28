import React from 'react'
import Header from '../Components/Header';
import {SimpleSlider} from '../Components/SimpleSlider';
import FeaturedCollections from '../Components/FeaturedCollections';
import Months from '../Components/Months';
const Home = () => {
  return (
    <div>
       <Header/>
        <SimpleSlider/>
        <FeaturedCollections/>
        <Months/>
    </div>
  )
}

export default Home
