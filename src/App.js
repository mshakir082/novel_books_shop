import './App.css';
import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import {SimpleSlider} from './Components/Slideshow';
// import FeaturedCollections from './Components/FeaturedCollections';
// import Months from './Components/Months';
// import Footer from './Components/Footer';
// import {ImageSlider} from './Components/Slider/ImageSlider';
import MainRoutes from "./Components/MainRoutes"
function App() {
  return (
    <div className="App">
       <Navbar/>
      {/* // <div style={{width:'75%',height:'auto',margin:'auto'}}>
      //   <Header/> */}
      //   {/* <Turner/> */}
      //   {/* <FeaturedCollections/>
      //   <Months/>
       
      // </div> */}
      {/* // <Footer/> */}
      <MainRoutes/>
    </div>
  );
}

export default App;
