import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white z-10 py-2">
      <div className="flex justify-end w-full px-4">
        {/* Right Side */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="cursor-pointer font-mono">
                  About Us
                </summary>
                <ul className="p-2 bg-black text-white font-mono rounded-t-none z-10">
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGRDxY7h3bLHVBPEFZREcoUdlBMSc2osVkSWXSmi8lAdo3-w/viewform?usp=sf_link">Join Us</a>
                  </li>
                  <li><a href="/SponsorPage">Sponsorships</a></li>
                  <li><a href="/MissionPage">Our Mission</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
    
  
};

export default Navbar;