import React, { useEffect } from 'react';
import EventsComponent from '../components/EventsComponent';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollingText = document.querySelector('.scrolling-text');
      if (scrollingText) {
        scrollingText.style.transform = `translateX(-${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="./public/tomua.jpg"
            alt="Banner"
            className="w-full h-full object-cover z-0"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-10 p-8">
          <h1 className="text-4xl font-bold text-black scrolling-text text-mono">
            Run Club
          </h1>
        </div>

      </div>

      <div className="relative w-full p-8">
        <EventsComponent />
      </div>
    </div>
  );
};

export default HomePage;




