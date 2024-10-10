"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import MatrixRain from '@/components/canvas';
import Navbar from '@/components/navbar';
import Profile from '@/components/profile';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import ScrollToTopButton from '@/components/btn-to-top';
import Footer from '@/components/footer';
const Home = () => {
  return (
    <>
      <MatrixRain />
      <Navbar />
      <Profile /> 
      <About/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
};

export default Home;
