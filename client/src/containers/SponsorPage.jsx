import React from "react";

const SponsorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sponsorship Opportunities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="border border-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Base Sponsor</h2>
          <ul>
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Premier Sponsor</h2>
          <ul>
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
            <li>Social Media Announcement</li>
            <li>5 complimentary event tickets</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Special Sponsor</h2>
          <ul>
            <li>Pitch your own tent at our event</li>
            <li>Business name on race shirt</li>
            <li>Social Media Announcement</li>
            <li>5 complimentary event tickets</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Bronze Sponsor</h2>
          <ul>
            <li>Logo placement on event website</li>
            <li>Recognition during the event</li>
            <li>2 complimentary event tickets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
