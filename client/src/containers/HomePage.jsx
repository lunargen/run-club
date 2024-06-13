import React from "react";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      
      <div className="absolute inset-0 z-0">
        <img
          src="./public/tomua.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-12 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-center mt-1 mb-16 text-grey-900">
          More than just a Run Club...
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="card w-80 bg-white bg-opacity-50 shadow-xl p-4">
            <div className="card-body">
              <h2 className="card-title text-black">Card 1</h2>
              <p className="text-black">Information for the left card.</p>
            </div>
          </div>
           <div className="card w-80 bg-white bg-opacity-50 shadow-xl p-4">
            <div className="card-body">
              <h2 className="card-title text-black">Card 2</h2>
              <p className="text-black">Information for the right card.</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
