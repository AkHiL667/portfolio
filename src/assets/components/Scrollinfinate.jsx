import React from 'react'
import Marquee from "react-fast-marquee";
import bootstrapIcon from '../images/icons8-bootstrap-48.png';
import npmIcon from '../images/icons8-npm-48.png';
import figmaIcon from '../images/icons8-figma-48.png';
import vsCodeIcon from '../images/icons8-visual-studio-code-2019-48.png';
import githubIcon from '../images/icons8-github-50.png';
import gitIcon from '../images/icons8-git-48.png';
import tailwindIcon from '../images/icons8-tailwindcss-48.png';
import javascriptIcon from '../images/icons8-javascript-48.png';
import cssIcon from '../images/icons8-css-48.png';
import htmlIcon from '../images/icons8-html-48.png';
import reactIcon from '../images/icons8-react-50.png';
import reduxIcon from '../images/icons8-redux-48.png';

function Scrollinfinate() {
  const logoImages = [
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: npmIcon, alt: "NPM" },
    { src: figmaIcon, alt: "Figma" },
    { src: vsCodeIcon, alt: "VS Code" },
    { src: githubIcon, alt: "GitHub" },
    { src: gitIcon, alt: "Git" },
    { src: tailwindIcon, alt: "Tailwind CSS" },
    { src: javascriptIcon, alt: "JavaScript" },
    { src: cssIcon, alt: "CSS" },
    { src: htmlIcon, alt: "HTML" },
    { src: reactIcon, alt: "React" },
    { src: reduxIcon, alt: "Redux" },
  ];

  // Create a shuffled copy of the logo images for the second row
  const shuffledLogos = [...logoImages].sort(() => Math.random() - 0.5);

  // Create duplicate sets of logos for better fill on larger screens
  const duplicatedLogos = [...logoImages, ...logoImages];
  const duplicatedShuffledLogos = [...shuffledLogos, ...shuffledLogos];

  const LogoRow = ({ direction, logos }) => (
    <div className="relative">
      {/* Left cloud-like gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-1/3 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
      
      {/* Right cloud-like gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-1/3 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
      
      <Marquee 
        speed={40} 
        gradient={false}
        pauseOnHover={false}
        direction={direction}
      >
        <div className="flex items-center justify-between w-full">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 md:mx-8">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-10 w-10 md:h-12 md:w-12 grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );

  return (
    <div className="marquee-container overflow-hidden group py-4 md:py-6">
      <div className="mb-3 md:mb-5">
        <LogoRow direction="left" logos={duplicatedLogos} />
      </div>
      <div>
        <LogoRow direction="right" logos={duplicatedShuffledLogos} />
      </div>
    </div>
  )
}

export default Scrollinfinate
