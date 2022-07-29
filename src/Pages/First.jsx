import React from 'react'
import '../index.css';
import ImageOne from '../Components/ImageOne'
import ImageTwo from '../Components/ImageTwo'
import ImageThree from '../Components/ImageThree'
import TextBox from '../Components/TextBox'

function Main() {
  return (
    <div className='shree' style={{}}>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default Main;