import React from 'react';
import { Link } from 'react-router-dom';

import chartImg from '../assets/chart.png';

const Navbar = () => {
  return (
    <div className="absolute z-10 w-full pt-8  container mx-auto max-md:hidden">
      <div className="flex flex-row justify-end items-center gap-32">
        <div className="flex flex- gap-12">
          {['home', 'shop', 'about-us', 'contact'].map((item) => (
            <Link className="text-text-color-palette-3 capitalize font-semibold text-lg">
              {item === 'about-us' ? 'About Us' : item}
            </Link>
          ))}
        </div>
        <img src={chartImg} />
      </div>
    </div>
  );
};

export default Navbar;
