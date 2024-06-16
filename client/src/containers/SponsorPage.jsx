import React from "react";

const SponsorPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="./public/tomua.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 z-1">
        <h1 className="text-3xl font-bold mb-8 text-white">Sponsorship Opportunities</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500 bg-white bg-opacity-80">
            <h2 className="text-lg font-semibold mb-4">Base Sponsor</h2>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Get Instagram Shout outs</li>
            </ol>
          </div>

          <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500 bg-white bg-opacity-80">
            <h2 className="text-lg font-semibold mb-4">Premier Sponsor</h2>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Get Instagram Shout outs</li>
              <li>Business name on a released Product</li>
            </ol>
          </div>

          <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500 bg-white bg-opacity-80">
            <h2 className="text-lg font-semibold mb-4">Special Sponsor</h2>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Instagram Shout outs</li>
              <li>Business name on released product</li>
              <li>Instagram reels made by athletes</li>
            </ol>
          </div>

          <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500 bg-white bg-opacity-80">
            <h2 className="text-lg font-semibold mb-4">Title Sponsor</h2>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Title Sponsor</li>
              <li>Announced as Marquee sponsor of RunClub</li>
              <li>Instagram shout outs</li>
              <li>Business products made with your company name</li>
              <li>Athletes post reels with your branding</li>
              <li>Brand on the racing jersey</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
