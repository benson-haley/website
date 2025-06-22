import './Main.scss';

import Card from './Card';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Carousel from './Carousel';

import { usePage } from './PageContext';

import portfolioTapestry from '../assets/dossier/lt.jpg';
import globalIlluminationDemo from '../assets/dossier/gi.gif';
import portfolioModding from '../assets/dossier/nsmbw.jpg';
import vrImage from '../assets/dossier/vr.jpg';
import portfolioWeb from '../assets/dossier/web.jpg';

import { useEffect, useState, useRef } from 'react';
import { useMeasure } from "@uidotdev/usehooks";

import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';

const MainSoftwareEngineer = () => {
    const { resumeLocation } = usePage();
    const [pdfContainer, { width }] = useMeasure();

    return (<>
        <Contact></Contact>
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
    </>);
}

const MainActor = () => {
    const { resumeLocation } = usePage();
    const [pdfContainer, { width }] = useMeasure();

    const carousel0 = [
        { src: '/carousel/gynt/troll.jpg', caption: 'In the Hall of the Mountain King' },
        { src: '/carousel/gynt/all.jpg', caption: 'The many faces of Peer Gynt' },
        { src: '/carousel/gynt/buck.jpg', caption: 'Trudging through the relentless of expanse of biting snow' },
        { src: '/carousel/gynt/ocean.jpg', caption: 'In media res' },
        { src: '/carousel/gynt/yacht.jpg', caption: 'The motley crew of the yacht' },
        { src: '/carousel/gynt/boyg.jpg', caption: 'Peer Gynt confronts the Boyg' },
    ];
    const carousel1 = [
        { src: '/carousel/wizard/scared.jpg', caption: 'The party encounters the Wizard of RIT' },
        { src: '/carousel/wizard/stuck.jpg', caption: 'The RIT President and First Lady encounter the Tin Man' },
        { src: '/carousel/wizard/group.jpg', caption: 'Mid-Shoot Photo Op' },
        { src: '/carousel/wizard/party.jpg', caption: 'B-Roll taken in the SHED (Student Hall for Exploration and Development) at RIT' },
    ];
    const carousel2 = [
        { src: '/carousel/spa/angelsSolo.jpg', caption: 'The Voice of Louis stares down darkness in Angels in America' },
        { src: '/carousel/spa/tniw.jpg', caption: 'The Guide capivates the audience in Thy Name is Woman' },
        { src: '/carousel/spa/angelsGrey.jpg', caption: 'A rehearsal shot from Angels in America' },
    ];
    const carousel3 = [
        { src: '/carousel/players/attwnSolo.jpg', caption: "Justice Wargrave in Agatha Christie's And Then There Were None" },
        { src: '/carousel/players/attwnCast.jpg', caption: 'The cast of the RIT Players production of And Then There Were None' },
        { src: '/carousel/players/fishCast.jpg', caption: 'The cast of the RIT Players production of Big Fish' },
        { src: '/carousel/players/fishDance.jpg', caption: 'Big Fish clownery' },
    ];

    return (<>
        <Contact></Contact>
        <Card id="about">
            <h1>About Me:</h1>
            <p>I'm a computer scientist from upstate New York who's trying to break software engineering stereotypes by having an immense passion for theatre.  I obtained a minor in <strong>Theatre Arts</strong> from <strong>Rochester Institute of Technology</strong> while pursuing combined accelerated BS/MS degrees in <strong>Computer Science</strong>.  While most of my experience is on stage, I have also dabbled in film, and my love of software engineering has led me to contributing to projections and captioning.</p>
            <p>My résumé includes more information about my experience, and an assortment of photos can be found in the dossier below.  Many thanks to my pedagogues—<a href="https://www.rit.edu/liberalarts/directory/awhgla-andy-head">Andy Head</a>, <a href="https://www.rit.edu/performingarts/directory/rmuspa-ryan-underbakke">Ryan Underbakke</a>, and <a href="https://www.rit.edu/performingarts/directory/asfgla-alexa-scott-flaherty">Alexa Scott-Flaherty</a>—for helping me become the person I am today.</p>
        </Card>
        <div id="pictures">
            <Portfolio tabs={["Peer Gynt", "Wizard of RIT", "Assorted RIT SPA", "Assorted RIT Players"]}>
                <Carousel images={carousel0}></Carousel>
                <Carousel images={carousel1}></Carousel>
                <Carousel images={carousel2}></Carousel>
                <Carousel images={carousel3}></Carousel>
            </Portfolio>
        </div>
        <Card id="resume">
            <div ref={pdfContainer}>
                <Document file={resumeLocation} >
                    <Page pageNumber={1} width={width}/>
                </Document>
            </div>
        </Card>
    </>);
}

const Main = () => {
    const { page, canPageChange } = usePage();

    const [content, setContent] = useState(<MainSoftwareEngineer/>);

    const main = useRef();

    const doEffect = canPageChange.current;
    useEffect(() => {
        if (!doEffect) { return; }
        // Scroll to the top of the page.
        window.scrollTo({ top: 0 });
        // Hide the current content.
        main.current.style.opacity = "0%";
        // Wait for the transition to end.
        main.current.addEventListener('transitionend', function handler(event) {
            if (event.propertyName !== 'opacity') return;
            main.current.removeEventListener('transitionend', handler);
             // Change the content.
            if (page === "SoftwareEngineer") { setContent(<MainSoftwareEngineer/>) }
            else if (page === "Actor") { setContent(<MainActor/>) }
            else { setContent(<MainSoftwareEngineer/>) }
            // Show the new content.
            setTimeout(() => {
                main.current.style.opacity = "100%";
            }, 200);
        });
    }, [page, doEffect]);

    return (
        <div className="main" ref={main}>
            { content }
            <div className="footer"></div>
        </div>
    );
}

export default Main;
