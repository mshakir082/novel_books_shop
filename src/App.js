import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainRoutes from './Router/MainRoutes'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{width:'75%',height:'auto',margin:'auto'}}>
      <MainRoutes/>
       </div>
      <Footer/>
    </div>
  );
}

export default App;
