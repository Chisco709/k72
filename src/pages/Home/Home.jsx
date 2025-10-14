import React from "react";
import Hero from "../Hero/Hero";
import EventsSection from "../EventsSection/EventsSection";
import HeroVideo from "../video/video"
import PillarsSection from "../PillarsSection/PillarsSection";
import AboutSection from "../Hunger/HungerSection";
import CoachingPage from "../../components/section/section";
import ImagenFinal from "../../components/imagen-final/imagen-final"
import TestimonialsSection from "../../pages/testimonial/testimonial-section"
import Footer from "../../pages/footer/footer"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Hero />
      <EventsSection/>
      <HeroVideo/>
      <PillarsSection/>
      <AboutSection/>
      <CoachingPage/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
