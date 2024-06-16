import React from 'react';


  const Navbar = () => {
    return (
      <div className="navbar bg-black text-white fixed top-0 left-0 w-full py-2 z-50">
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
                    <li><a href="/">Home</a></li>
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