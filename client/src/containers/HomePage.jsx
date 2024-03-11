import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-4 text-center">RunClub Championships 2024</h1>
        <div className="text-center mb-8">
          <p className="text-lg">Our mission is to promote fitness, camaraderie, and competition through running.</p>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="w-1/2 px-2">
            <h2 className="text-2xl font-bold font-mono mb-2">Order of Events</h2>
            <ul>
              <li className="font-mono">5000m</li>
              <li className="font-mono">100m</li>
              <li className="font-mono">400m</li>
              <li className="font-mono">1500m</li>
              <li className="font-mono">Shot Put</li>
              <li className="font-mono">Long Jump </li>
            </ul>
          </div>
          <div className="w-1/2 px-2">
            <h2 className="text-xl font-bold font-mono mb-2">Other Details</h2>
            <p>Join us for the most thrilling running event of the year! May 18th, 2024 at 12PM Location: University at Albany Track.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
