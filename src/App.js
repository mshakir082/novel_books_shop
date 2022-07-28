import './App.css';
// import CaptionCarousel from './Components/Slideshow';
// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import {SimpleSlider} from './Components/SimpleSlider';
// import FeaturedCollections from './Components/FeaturedCollections';
// import Months from './Components/Months';
// import Footer from './Components/Footer';
import AllRoutes from "./routes/AllRoutes"
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div style={{width:'75%',height:'auto',margin:'auto'}}>
        {/* <Header/>
        <SimpleSlider/>
        <FeaturedCollections/>

        <Months/> */}
        {/* <CaptionCarousel/> */}
       <AllRoutes/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
