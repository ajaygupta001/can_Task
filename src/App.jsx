import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Product from "./components/Product";



import "./styles/App.css";
import "./styles/Header.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App(){
  return ( 
  <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/feature" element={<Feature />}/>
       <Route path="*" element={<div>Page Not Found 404</div>}/>
       <Route path="/product/:id" element={<Product />}/>
     </Routes>



  </Router>
  );
}

export default App;