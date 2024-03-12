import React from "react";

const SponsorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sponsorship Opportunities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500">
          <h2 className="text-lg font-semibold mb-4">Base Sponsor</h2>
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
          </ol>
        </div>

        <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500">
          <h2 className="text-lg font-semibold mb-4">Premier Sponsor</h2>
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
            <li>Social Media Announcement</li>
          </ol>
        </div>

        <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500">
          <h2 className="text-lg font-semibold mb-4">Special Sponsor</h2>
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
            <li>Social Media Announcement</li>
            <li>10 complimentary event tickets</li>
            <li>Special Reel made with our athletes for your business</li>
            <li>One event named after your Business</li>
          </ol>
        </div>

        <div className="border border-gray-200 p-4 rounded-md hover:border-gray-500">
          <h2 className="text-lg font-semibold mb-4">Title Sponsor</h2>
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Title Sponsor</li>
            <li>Announced as Marquee sponsor of the meet</li>
            <li>Pitch your own tent at our event</li>
            <li>Business name big on front of Race shirt</li>
            <li>Social Media Announcement</li>
            <li>10 complimentary event tickets</li>
            <li>Special Reel made with our athletes for your business</li>
            <li>One race named after your Business</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
