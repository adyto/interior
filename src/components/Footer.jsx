import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col items-center lg:items-end px-4 gap-y-4 my-16 sm:gap-y-8 sm:my-16 md:gap-y-10 md:my-20 lg:flex-row lg:gap-x-20 lg:my-32 xl:gap-x-28 xl:mt-40 xl:mb-28">
      <div className=" w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/4 flex justify-end items-center relative border rounded-full">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full py-3 px-4 border border-white bg-white/20 backdrop-blur placeholder-[#878787] rounded-full text-[#878787] outline-none xl:py-6 xl:px-7"
        />
        <button className="absolute p-1 rounded-full bg-text-color-palette-1 mr-3 cursor-pointer xl:py-3 xl:px-6 text-white">
          <span>Subscribe</span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-y-4 md:gap-6 md:grid-flow-col md:auto-cols-max text-center lg:text-start lg:gap-4 lg:w-3/5 xl:gap-20 ">
        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <p className="text-black font-bold xl:text-2xl">Support</p>
          <div className="flex flex-col gap-y-1 text-sm md:text-base md:gap-y-4">
            {['about-us', 'careers', 'blog'].map((item) => (
              <Link className="capitalize">
                {item === 'about-us' ? 'About Us' : item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <p className="text-black font-bold xl:text-2xl">Useful Link</p>
          <div className="flex flex-col  gap-1 text-sm md:text-base md:gap-y-4">
            {['payment-tax', 'term-of-service', 'privacy-policy'].map(
              (item) => (
                <Link className="capitalize">
                  {item === 'payment-tax'
                    ? 'Payment & Tax'
                    : item === 'term-of-service'
                    ? 'Term of service'
                    : 'Privacy Policy'}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <p className="text-black font-bold xl:text-2xl">Our Menu</p>
          <div className="flex flex-col gap-1 md:gap-y-4">
            {['best-product', 'category'].map((item) => (
              <Link className="capitalize">
                {item === 'best-product' ? 'Best Product' : 'Category'}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:gap-y-5 max-w-xs">
          <p className="text-black font-bold xl:text-2xl">Address</p>
          <div className="flex flex-col gap-y-4 text-sm md:text-base">
            <p>JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</p>
            <p>hallo@daunku.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
