import './App.scss';
import Tie from './components/Tie';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Portfolio from './components/Portfolio';


import portfolioTapestry from './assets/dossier/lt.jpg';
import globalIlluminationDemo from './assets/dossier/gi.gif';
import portfolioModding from './assets/dossier/nsmbw.jpg';
import vrImage from './assets/dossier/vr.jpg';
import portfolioWeb from './assets/dossier/web.jpg';

import React from 'react';
import { useMeasure } from "@uidotdev/usehooks";

import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';

const App = () => {
  const resumeLocation = "/resume.pdf";
  const [pdfContainer, { width }] = useMeasure();

  return (
    <div className="app">
      <Tie
        clipContent="Software Engineer"
        tagContent={[
          {text: "About Me", href: "#about"},
          {text: "Portfolio", href: "#portfolio"},
          {text: "Résumé", href: resumeLocation}
        ]}>
      </Tie>
      <div className="main">
        <div className="contact">
          <hr></hr>
          <p>bah8454@rit.edu</p>
          <hr></hr>
          <p>518 429 1625</p>
          <hr></hr>
          <p><a href="https://github.com/benson-haley">GitHub</a></p>
          <hr></hr>
          <p><a href="https://www.linkedin.com/in/benson-haley">LinkedIn</a></p>
          <hr></hr>
        </div>
        <Card id="about">
          <h1>About Me:</h1>
          <p>I'm a <strong>computer scientist</strong> and <strong>software engineer</strong> from upstate New York, currently pursuing a <strong>Master's Degree</strong> in <strong>Computer Science</strong> at <strong>Rochester Institute of Technology</strong> with one semester remaining before I finish my coursework and research into advancing Gaussian Splatting.</p>
          <p>I love programming because it allows me to use my creativity to solve any number of problems.  My résumé includes more information about my programming experience, and past projects can be found in the portfolio below.  Outside of programming I like to perform in musical theatre, and when I'm not starring on stage, I'm probably playing piano, practicing Tae Kwon Do, playing games, or reading fantasy novels.</p>
        </Card>
        <Card id="portfolio">
          <h1>Portfolio:</h1>
          <p>The portfolio below includes a selection of software-related projects from my various areas of interest.</p>
        </Card>
        <Portfolio tabs={["Londronic Tapestry", "Graphics & Rendering", "Hacking & Modding", "VR & XR", "Web Development"]}>
          <div>
            <div className="overlaid">
              <img src={portfolioTapestry} alt="The Londronic Tapestry" style={{width: "100%"}}></img>
              <div><div><p>The <strong>Londronic Tapestry</strong> is an interactive musical experience built in <a href="https://godotengine.org/">Godot</a> that was created for a concert installation at the Royal College of Music in London.  The music and art, designed by Royal College alumnus <a href="https://leifhaley.com">Leif Haley</a>, immerses the audience in in London experience.  The Tapestry can be <a href="https://londronictapestry.leifhaley.com/">explored online</a> or <a href="https://github.com/londronictapestry/londronictapestry.github.io/releases/download/windows/LondronicTapestry.exe">downloaded</a> for Windows.</p></div></div>
            </div>
          </div>
          <div>
            <div className="overlaid">
              <img src={globalIlluminationDemo} alt="Animation of a real-time Global Illumination scene a la Whitted"></img>
              <div><div><p>Displayed here is a demonstration of a scene I rendered in a <strong>raytracer</strong> I built using C++ and an implementation of <a href="https://www.khronos.org/sycl/">SYCL</a> called <a href="https://adaptivecpp.github.io/">AdaptiveCpp</a> to offload rendering work to the GPU in order to attain real-time performance.  I am very passionate about graphics programming: I have build both a rasterizer and raytracer from scratch, and I also have experience with <a href="https://www.vulkan.org/">Vulkan</a> (more specifically, the <a href="https://github.com/KhronosGroup/Vulkan-Hpp">vulkan.hpp</a> bindings).</p></div></div>
            </div>
          </div>
          <div>
            <div className="overlaid">
              <img src={portfolioModding} alt="Blurry code window side-by-side with a custom New Super Mario Bros Wii level"></img>
              <div><div style={{display: "flex", flexDirection: "column"}}>
                <h3>Custom Actor Spawner:</h3>
                <p>A modification for New Super Mario Bros Wii to add in a custom object that can load any pre-built actor into the game, including several options to manipulate the properties and spawn data of such actors, with a focus on making custom level design using this code easier. The few hundred lines of C++ code can be compiled and injected into the game via the attached assembly hooks with another individual's creation, the <a href="https://github.com/Treeki/Kamek">Kamek</a> toolchain.</p>
                <h3>Custom Physics Object:</h3>
                <p>A New Super Mario Bros Wii mod which allows the spawning of a custom physics collider attached to a visual loaded from a level designer's tileset selection. The system relies on a home-grown implementation of a container resembling <a href="https://github.com/mattreecebentley/plf_colony">plf::colony</a>, as well as a movement system to allow complex collider motion to be easily defined by level designers.  Due to space limitations in the settings of a regular actor, a helper-program written in Python is also included to help understanding the conversion of motion data into corresponding packed 16-bit floats.</p>
              </div></div>
            </div>
          </div>
          <div>
            <div className="overlaid">
              <img src={vrImage} alt="Benson Haley, right, adjusting the helmet face camera on Rafa Davis, left, for RIT's extended reality research project."></img>
              <div><div><p>As part of RIT's <a href="https://www.rit.edu/news/new-program-connects-multidisciplinary-student-teams-faculty-mentors">Vertically Integrated Project</a> program, I worked with a team of students to create a framework in <a href="https://www.unrealengine.com/">Unreal Engine</a> to facilitate live virtual-reality-enabled theatrical performances.</p></div></div>
            </div>
          </div>
          <div>
            <div className="overlaid">
              <img src={portfolioWeb} alt="A stack of newspapers"></img>
              <div><div><p>I created this website with HTML, CSS, and a splash of JavaScript with React!  Additionally, I created the <a href="https://chsdevilsadvocate.github.io/home.html">Columbia High School Devil's Advocate</a> website for the newspaper club of my high school.  The website allowed the general public to keep up to date with news and events during the Covid-19 lockdown.</p></div></div>
            </div>
          </div>
        </Portfolio>
        <Card id="resume">
          <div ref={pdfContainer}>
            <Document file={resumeLocation} >
              <Page pageNumber={1} width={width}/>
            </Document>
          </div>
        </Card>
        <div className="footer">

        </div>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
