import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import {SimpleSlider} from './Components/SimpleSlider';
import FeaturedCollections from './Components/FeaturedCollections';
import Months from './Components/Months';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{width:'75%',height:'auto',margin:'auto'}}>
        <Header/>
        <SimpleSlider/>
        <FeaturedCollections/>
        <Months/>
       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
