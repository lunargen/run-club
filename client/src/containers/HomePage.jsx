import React, { useEffect } from 'react';
import EventsComponent from '../components/EventsComponent';

//will be changing the homepage.

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollingImage = document.querySelector('.scrolling-image');
      if (scrollingImage) {
        scrollingImage.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./public/tomua.jpg"
            alt="Banner"
            className="w-full h-full object-cover z-0"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-10 p-8">
          <img
            src="./public/clubicon.jpg"
            alt="Scrolling Image"
            className="scrolling-image w-20 h-20 object-contain"
          />
        </div>


      </div>

      <div className="relative w-full p-8">
        <EventsComponent />
      </div>
    </div>
  );
};

export default HomePage;




