import React from "react";
import Akhil from "../images/Akhil.jpg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const nameRef = useRef(null);
  const handRef = useRef(null);
  
  useGSAP(()=>{
    gsap.from(
      nameRef.current,
      {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power2.inOut",
      },
    );
    
    // Waving hand animation
    const waveTimeline = gsap.timeline({repeat: -1, repeatDelay: 2});
    waveTimeline.to(handRef.current, {
      rotate: 15,
      duration: 0.2,
      ease: "power1.inOut"
    })
    .to(handRef.current, {
      rotate: -15,
      duration: 0.2,
      ease: "power1.inOut"
    })
    .to(handRef.current, {
      rotate: 15,
      duration: 0.2,
      ease: "power1.inOut"
    })
    .to(handRef.current, {
      rotate: 0,
      duration: 0.2,
      ease: "power1.inOut"
    });
  });
  
  return (
    <div className="dark:bg-zinc-900 dark:bg-zinc-900 dark:text-white  pt-19 md:pt-0 pl-42m:pr-10 h-screen flex flex-col md:flex-row sm:justify-center sm:items-center sm:gap-[10vw] h-fit md:h-screen w-full ">
       <div className="absolute md:dark:bg-zinc-700 dark:text-white sm:hidden md:hidden xl:flex top-20 left-2 xl:flex md:order-1 order-3 md:flex md:top-[40%] md:left-[5%] z-10 cursor-pointer flex gap-4 flex-col-reverse md:bg-zinc-100 rounded-lg p-4">
        <a
          href="https://www.instagram.com/akhil_129_/"
          className="instalogo hover:text-red-500  cursor-pointer transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-line text-3xl"></i>
        </a>
        <a
          href="https://github.com/AkHiL667"
          className="instalogo hover:text-zinc-400  cursor-pointer transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-line text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/akhil-konda-abb9252a0"
          className="instalogo hover:text-blue-500  cursor-pointer transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-fill text-3xl"></i>
        </a>
      </div >
      <div className="p-5 md:p-0 md:order-2 order-2">
        <div className="overflow-hidden">
          <h1 ref={nameRef} className="text-6xl font-bold ">
            Akhil
            <span
              ref={handRef}
              className="ml-2 mb-3"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                height: "1em",
                transformOrigin: "bottom center",
              }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                style={{ verticalAlign: "middle" }}
              >
                <radialGradient
                  id="IconifyId17ecdb2904d178eab21437"
                  cx="-779.868"
                  cy="686.689"
                  r="91.008"
                  gradientTransform="scale(1 -1) rotate(45 506.867 1318.897)"
                  gradientUnits="userSpaceOnUse"
                  >
                  <stop offset=".353" stopColor="#ffca28" />
                  <stop offset=".872" stopColor="#ffb300" />
                </radialGradient>
                <path
                  d="M59.53 107.44c-3.95-3.17-40.63-38.84-41.04-39.23c-1.62-1.62-2.64-3.3-2.92-4.84c-.29-1.6.2-3 1.5-4.3c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l16.63 15.98c.29.28.67.42 1.04.42a1.494 1.494 0 0 0 1.07-2.54L19.13 46.25c-2.66-2.66-3.91-6.73-.75-9.89c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l27.16 26.48c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L24.91 28.02c-1.51-1.51-2.42-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.58L67.3 51.31c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L45.26 24.36c-1.52-1.52-2.43-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59c8.86 8.7 31.99 31.45 32.77 32.29c2.97 2.05 3.57-1.05 3.72-3.06c.17-2.34-2.51-10.51-.95-17.86c2.62-9.77 10.17-8.17 10.34-8.09c4.14 1.94 3.35 4.84 1.88 10.67l-.15 1.15c-1.54 7.62 9.04 30.2 9.82 31.89c4.15 9.08 8.93 27.49-6.9 43.32c-17.35 17.35-38.83 8.46-45.38 1.91z"
                  fill="url(#IconifyId17ecdb2904d178eab21437)"
                />
                <path
                  d="M81.79 117.18c-10.64 0-19.69-5.09-23.26-8.62c-3.21-2.62-23.47-22.18-39.97-38.19c-.67-.65-1.06-1.02-1.1-1.07c-1.87-1.87-3.03-3.82-3.36-5.66c-.38-2.09.27-3.98 1.91-5.63c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l16.61 15.96l-26.56-27.42c-3.06-3.06-4.6-8.13-.73-11.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03L56.45 62.5L23.84 29.07c-1.74-1.74-2.81-3.87-3-5.99c-.19-2.26.59-4.33 2.26-6c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.07 6.65 3.02l33.26 32.43l-24.16-24.83c-1.75-1.75-2.82-3.88-3-6c-.19-2.25.59-4.32 2.26-5.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l7.21 7.07c12.85 12.6 23.59 23.15 24.74 24.33c.56.45 1.29.62 1.6.47c.2-.1.42-.56.38-1.53c-.06-1.7-.3-3.81-.55-6.04c-.5-4.48-1.02-9.12-.37-12.18c1.42-5.31 4.21-7.56 6.29-8.53c2.86-1.32 5.63-.86 6.16-.61c5.2 2.44 4.17 6.52 2.75 12.18l-.03.14l-.16 1.17c-1.04 5.12 4.3 19.27 9.64 30.8l.08.16c3.57 7.8 10 27.81-7.2 45.01c-7.91 7.89-16.47 10.58-24.19 10.58zM21.35 58.72c-1.18 0-2.3.49-3.22 1.41c-.95.95-1.28 1.87-1.08 2.97c.22 1.21 1.11 2.65 2.5 4.05c.01.01.41.4 1.1 1.06c23.42 22.73 37.56 36.24 39.82 38.06l.12.11c5.52 5.52 26.03 15.32 43.26-1.91c15.87-15.87 9.9-34.4 6.59-41.64l-.07-.15c-3.44-7.42-11.26-25.42-9.87-32.6l.23-1.5c1.54-6.12 1.63-7.4-.98-8.66c-.77-.14-6.29-.81-8.4 7.06c-.53 2.51-.02 7.1.43 11.15c.26 2.29.5 4.46.56 6.27c.1 2.85-1.25 3.94-2.07 4.34c-1.67.81-3.66.12-4.9-.92l-.13-.12c-.61-.66-15.12-14.89-24.72-24.31L53.3 16.3c-2.46-2.47-5.63-2.88-7.76-.75c-1.04 1.04-1.51 2.26-1.4 3.61c.12 1.41.88 2.88 2.15 4.15L70.5 48.14a3.012 3.012 0 0 1-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L32.98 19.94c-2.46-2.46-5.64-2.87-7.76-.74c-1.04 1.04-1.51 2.26-1.4 3.61c.13 1.41.89 2.89 2.15 4.14L58.6 60.41c1.15 1.16 1.14 3.06-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L27.2 38.17c-2.46-2.48-5.64-2.88-7.76-.75c-2.59 2.59-1.21 5.8.75 7.77l26.57 27.44a2.988 2.988 0 0 1-.03 4.2c-1.12 1.12-3.06 1.13-4.2.04L25.9 60.89c-1.4-1.41-3.01-2.17-4.55-2.17z"
                  fill="#eda600"
                />
                <path
                  d="M84.76 46.54c-5.49 11.21-4.78 26.9 3.46 39.49c.93 1.7 2.52.87 1.71-.88c-9.95-21.29.48-36.63.48-36.63l-5.65-1.98z"
                  fill="#eda600"
                />
                <g>
                  <path
                    d="M63.17 4.5c3.02-.79 6.24-.72 9.37.01c3.11.75 6.22 2.33 8.53 4.91c2.26 2.56 3.65 5.67 4.12 8.93c.44 3.23.03 6.56-1.5 9.32c-.18-3.1-.72-5.95-1.63-8.58c-.47-1.31-1.02-2.56-1.69-3.74c-.66-1.17-1.44-2.33-2.27-3.28c-1.69-1.95-3.98-3.47-6.55-4.65c-2.58-1.22-5.39-2.12-8.38-2.92z"
                    fill="#b0bec5"
                  />
                  <path
                    d="M64 13.98c1.67-1.06 3.76-1.28 5.73-.93c1.99.35 3.89 1.34 5.39 2.71c1.49 1.39 2.55 3.14 3.21 4.96c.32.91.48 1.87.63 2.8c.05.96.05 1.92-.1 2.88c-.69-.73-1.23-1.46-1.74-2.17c-.59-.67-1.05-1.38-1.58-2.03c-1.04-1.29-2.05-2.46-3.14-3.5c-1.12-1.01-2.3-1.9-3.67-2.67c-1.36-.79-2.89-1.45-4.73-2.05z"
                    fill="#90a4ae"
                  />
                </g>
                <g>
                  <path
                    d="M6.83 77.34c1.41 2.76 2.88 5.32 4.59 7.58c1.7 2.26 3.65 4.18 5.92 5.43c1.1.61 2.41 1.14 3.69 1.54c1.29.41 2.63.69 4.01.88c2.76.34 5.66.28 8.73-.19c-2.38 2.07-5.56 3.17-8.8 3.41c-3.28.22-6.61-.49-9.59-2.17c-3-1.71-5.2-4.43-6.58-7.32c-1.38-2.91-2.12-6.04-1.97-9.16z"
                    fill="#b0bec5"
                  />
                  <path
                    d="M16.28 76.17c.97 1.68 1.93 3.03 2.98 4.21c1.04 1.18 2.16 2.15 3.38 3.03c1.24.85 2.6 1.6 4.08 2.35c.74.38 1.53.68 2.31 1.12c.81.35 1.63.72 2.49 1.25c-.91.34-1.84.54-2.79.69c-.94.04-1.91.09-2.87-.04c-1.92-.26-3.84-.93-5.52-2.1c-1.65-1.19-3.02-2.84-3.77-4.71c-.76-1.86-.98-3.94-.29-5.8z"
                    fill="#90a4ae"
                  />
                </g>
              </svg>
            </span>
          </h1>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", margin: "16px 0" }}
        >
          <div
            style={{
              flex: 1,
              height: "2px",
              background: "gray",
              borderRadius: "1px",
              marginRight: "10px",
              maxWidth: "70px",
            }}
          ></div>
          <h2 className="text-lg m-0">Full Stack Developer</h2>
        </div>
        <p className="text-sm sm:text-md text-gray-500 max-w-xl">Full Stack Developer from Hyderabad. I build real-time, interactive, and scalable web apps with clean UI and production-grade functionality.</p>
        <a 
          href="/resume.pdf" 
          download="Akhil_Konda_Resume.pdf"
          className="mt-9 bg-black sm:mt-10 cursor-pointer active:scale-95 transition-all duration-300 text-white px-4 py-2 rounded-lg inline-flex items-center"
        >
          Resume
          <i className="ri-download-line ml-2"></i>
        </a>
      </div>
      <div className="md:order-3 pl-16 md:pl-0 order-1">
        <img className="hero-image w-[230px] h-[230px] md:w-[300px] md:h-[300px] object-cover" src={Akhil} alt="Akhil" />
      </div>
    </div>
  );
}

export default Hero;
