import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar font-bold ${
        scrollPosition <= 500
          ? "bg-transparent text-black"
          : "bg-black text-white"
      } fixed top-0 left-0 w-full py-1 z-50`}
    >
      <div className="flex justify-end w-full px-4">
        {/* Right Side */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="cursor-pointer font-mono btn-glass text-xl ">
                  About Us
                </summary>
                <ul className="p-2 bg-black text-white font-mono rounded-t-none z-10">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGRDxY7h3bLHVBPEFZREcoUdlBMSc2osVkSWXSmi8lAdo3-w/viewform?usp=sf_link">
                      Join Us
                    </a>
                  </li>
                  <li>
                    <a href="/SponsorPage">Sponsorships</a>
                  </li>
                  <li>
                    <a href="/MissionPage">Our Mission</a>
                  </li>
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
