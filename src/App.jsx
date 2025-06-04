import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/hero/Hero";
import About from "./Componets/About/About";
import Services from './Components/services/Services'
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
