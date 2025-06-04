import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/hero/Hero";
import About from "./Componets/About/About";
<<<<<<< HEAD
import Services from "./Componets/services/Services";
=======
import Services from './Components/services/Services'
>>>>>>> e39d988e30c51354ef01b4721395ae8262d6a0d4
import MyWork from "./Componets/myWork/myWork";
import Contact from "./Componets/Contact/Contact"
import Footer from "./Componets/Footer/Footer"




const App = () => {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
        
      </div>
      <div>
        <Hero/>
        <About/>
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
    
  );
};

export default App;
