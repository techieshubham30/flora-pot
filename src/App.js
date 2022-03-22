import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";
import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom';
import { ProductListing } from "./pages/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
     <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/product" element={<ProductListing/>}></Route>
    </Routes>
     <Footer/>
   
    </div>
  );
}

export default App;
