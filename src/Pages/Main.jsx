import React from 'react'
import './index.css';
import ImageOne from '../Components/Main/ImageOne.js'
import ImageTwo from '../Components/Main/ImageTwo.js'
import ImageThree from '../Components/Main/ImageThree.js'
import TextBox from '../Components/Main/TextBox.js'

function Main() {
  return (
    <div className='shree'>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default Main;
