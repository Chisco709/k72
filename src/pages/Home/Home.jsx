import React from "react";
import Hero from "../Hero/Hero";
import EventsSection from "../EventsSection/EventsSection";
import HeroVideo from "../video/video"
import PillarsSection from "../PillarsSection/PillarsSection";
import AboutSection from "../Hunger/HungerSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Hero />
      <EventsSection/>
      <HeroVideo/>
      <PillarsSection/>
      <AboutSection/>
    </div>
  );
};

export default Home;
