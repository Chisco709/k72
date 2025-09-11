import React from "react";
import Hero from "../Hero/Hero";
import EventsSection from "../EventsSection/EventsSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Hero />
      <EventsSection/>
    </div>
  );
};

export default Home;
