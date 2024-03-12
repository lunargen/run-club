import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="flex-1">
        <a href="https://www.athletic.net/TrackAndField/meet/534089/info" className="btn btn-ghost text-xl">Race Sign Up</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li>
            <details>
              <summary>
                Options
              </summary>
              <ul className="p-2 bg-primary text-white rounded-t-none">
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