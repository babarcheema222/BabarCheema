import React, { useState, useEffect } from 'react'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Professional3D from './components/canvas/Professional3D'
import AnimatedLine from './components/canvas/AnimatedLine'
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import GetInTouch from './components/GetInTouch'
import { initializeGlobalLinkHandling } from './utils/globalLinkHandler'
import './App.css'


function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#050816'; // Dark mode background
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.style.backgroundColor = 'grey'; // Light mode background
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize global link handling
  useEffect(() => {
    const cleanup = initializeGlobalLinkHandling();
    return cleanup;
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`relative z-0 min-h-screen overflow-x-hidden ${theme === 'dark' ? 'bg-primary' : 'bg-light-primary'}`}>
      <Navbar theme={theme} />
      {/* Full Background 3D Starfield */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={1} />
          <Suspense fallback={null}>
            <Professional3D theme={theme} />
          </Suspense>
        </Canvas>
      </div>
      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center">
        <div>
          <h1 className={`font-black ${theme === 'dark' ? 'text-white' : 'text-light-text'} lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 flex items-center justify-center gap-4`}>
          <div className="w-32 h-32 rounded-full border-2 border-[#a084fa] shadow-md overflow-hidden flex items-center justify-center backdrop-blur-md bg-blue">
  <img src='src/assets/pic2.png' alt="Profile" className="w-full h-full object-cover object-top" />
</div>


            Hi, I'm <span className="text-[#915EFF]">Babar</span>
          </h1>
          <div className="relative h-20 w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <AnimatedLine />
              </Suspense>
            </Canvas>
          </div>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ${theme === 'dark' ? 'text-[#dfd9ff]' : 'text-light-secondary'}`}>
          I'm a Flutter Frontend & Web Developer. <br className="sm:block hidden" />
          Let's turn your ideas into real digital products.
          </p>
        </div>
      </section>
      {/* Main Sections */}
      <section id="about" className={`scroll-mt-24 ${theme === 'dark' ? 'text-white' : 'text-light-text'}`}><About /></section>
      <section id="experience" className={`scroll-mt-24 ${theme === 'dark' ? 'text-white' : 'text-light-text'}`}><Experience /></section>
      <section id="tech" className={`scroll-mt-24 ${theme === 'dark' ? 'text-white' : 'text-light-text'}`}><Tech /></section>
      <section id="projects" className={`scroll-mt-24 ${theme === 'dark' ? 'text-white' : 'text-light-text'}`}><Projects /></section>
      <section id="contact" className={`scroll-mt-24 ${theme === 'dark' ? 'text-white' : 'text-light-text'}`}><Contact /></section>
      <GetInTouch />
      <footer className={`w-full py-6 text-center text-sm mt-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        Developed by Babar Cheema
      </footer>
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
    </div>
  )
}

export default App 