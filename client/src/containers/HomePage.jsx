import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-8xl sm:text-4xl font-bold font-mono mb-4 text-center hover:text-gray-200">RunClub Championships 2024</h1>
        <div className="flex justify-center items-center mb-4 text-center">
          <div className="justify-center">
            <ul>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200">12PM May 18th 2024</li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200">University at Albany</li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">5000m</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">100m</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">400m</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">1500m</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">Shot Put</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">Long Jump</a></li>
              <li className="text-4xl flex justify-center font-mono hover:text-gray-200"><a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="text-4xl font-mono">Experience Excellence</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
