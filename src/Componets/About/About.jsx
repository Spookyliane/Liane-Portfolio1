import React, { useState, useEffect } from "react";
import "./About.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const About = () => {
  const [jsProgress, setJsProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [tailwindProgress, setTailwindProgress] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJsProgress((prev) => (prev < 80 ? prev + 10 : 80));
      setReactProgress((prev) => (prev < 80 ? prev + 10 : 80));
      setTailwindProgress((prev) => (prev < 90 ? prev + 10 : 90));
      setPythonProgress((prev) => (prev < 80 ? prev + 10 : 80));
      setHtmlProgress((prev) => (prev < 90 ? prev + 10 : 90));
      setCssProgress((prev) => (prev < 90 ? prev + 10 : 90));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="About">
        <div className="About-title">
          < h1 className="h1">About me</h1>
          <p>
            I'm a <span>Frontend developer</span> skilled in HTML, CSS, Tailwind, React, JavaScript, and Python,
            passionate about building sleek, high-performance web applications. I create intuitive, scalable solutions
            with clean code and seamless user experiences. Always learning and adapting, I'm driven to craft impactful
            digital products. Let’s build something amazing!
          </p>

          {/* Python Progress */}
          <div className="code-area">
            <div className="JS">
              JS
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={pythonProgress} />
              <div className="per">80%</div>
            </div>
          </div>

          {/* JavaScript Progress */}
          <div className="code-area">
            <div className="JS">
              <img src="https://img.icons8.com/?size=25&id=1909&format=png&color=FFFFFF" alt="JavaScript Icon" />
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={jsProgress} />
              <div className="per">80%</div>
            </div>
          </div>

          {/* React Progress */}
          <div className="code-area">
            <div className="JS">
            <img src="https://img.icons8.com/?size=25&id=047WZAFDnkVp&format=png&color=FFFFFF" alt="React Icon" />
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={reactProgress} />
              <div className="per">80%</div>
            </div>
          </div>

          {/* Tailwind Progress */}
          <div className="code-area">
            <div className="JS">
              <img src="https://img.icons8.com/?size=25&id=UpSCHTwpywad&format=png&color=FFFFFF" alt="Tailwind CSS Icon" />
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={tailwindProgress} />
              <div className="per">90%</div>
            </div>
          </div>

          

          {/* HTML Progress */}
          <div className="code-area">
            <div className="JS">
            <img src="https://img.icons8.com/?size=25&id=9nmz9TYzN8iO&format=png&color=FFFFFF" alt="HTML5 Icon" />
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={htmlProgress} />
              <div className="per">90%</div>
            </div>
          </div>

          {/* CSS Progress */}
          <div className="code-area">
            <div className="JS">
            <img src="https://img.icons8.com/?size=25&id=38273&format=png&color=FFFFFF" alt="CSS3 Icon" />
            </div>
            <div className="progressive-bar">
              <ProgressBar progress={cssProgress} />
              <div className="per">90%</div>
            </div>
          </div>
        </div>
      </div>
     
     <div className="testimonials">
       <div className="test">
        <div><h6 className="h6">2+</h6></div>
        <div>Years experience</div>
       </div>
        <div className="fence"></div>

       <div className="test">
       <div><h6 className="h6">10+</h6></div>
       <div>Complete project</div>
       </div>
       <div className="fence"></div>
        
       <div className="test">
       <div><h6 className="h6">8+</h6></div>
       <div>Happy Clients</div>
       </div>

     </div>

    </div>
  );
};

export default About;
