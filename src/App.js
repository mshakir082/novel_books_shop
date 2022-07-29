import './App.css';

// import CaptionCarousel from './Components/Slideshow';
// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import {SimpleSlider} from './Components/SimpleSlider';
// import FeaturedCollections from './Components/FeaturedCollections';
// import Months from './Components/Months';
// import Footer from './Components/Footer';
// import AllRoutes from "./routes/AllRoutes"

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainRoutes from './Router/MainRoutes'
import SinglePage from './Components/SinglePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
{/* <SinglePage/> */}
      <MainRoutes/>
       </div>
      <Footer/>

    </div>
  );
}

export default App;
