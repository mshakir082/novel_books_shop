import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainRoutes from "./Router/MainRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
