import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="flex-1">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGRDxY7h3bLHVBPEFZREcoUdlBMSc2osVkSWXSmi8lAdo3-w/viewform?usp=sf_link" className="btn btn-ghost text-xl">Get More Information</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li>
            <details>
              <summary>
                Join Us
              </summary>
              <ul className="p-2 bg-black text-white rounded-t-none">
                <li><a href="/EventsPage">Future Events</a></li>
                <li><a href="/CoachingPage">Get Coaching</a></li>
              </ul>
            </details>

          </li>
          <li>
            <details>
              <summary>
                About Us
              </summary>
              <ul className="p-2 bg-black text-white rounded-t-none">
                <li><a href="/SponsorPage">Sponserships</a></li>
                <li><a href="/MissionPage">Our Mission</a></li>
                <li><a href="/ContactPage">Contact Us</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;