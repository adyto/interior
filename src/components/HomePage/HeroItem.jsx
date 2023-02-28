import React from 'react';
import bgImage from '../../assets/bg-image.png';
import { IoSearch } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

import profile from '../../assets/profile.png';

const HeroItem = () => {
  return (
    <div
      className="w-full bg-center relative bg-cover bg-no-repeat pt-40 pb-28 lg:pt-60 lg:pb-72 after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-white after:to-white/0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center px-4 xl:px-0">
        <h1 className="font-bold text-3xl text-white max-w-5xl text-center leading-1 xl:text-7xl">
          Bring Serenity to Your Place With Interior
        </h1>
        <h2 className="mt-6 text-xl mb-[42px] max-w-xl text-center text-white xl:text-2xl">
          find your dream plant for you home decoration with us, and we will
          make it happen.
        </h2>
        <div className=" w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/4 flex justify-end items-center relative">
          <input
            type="text"
            placeholder="Search plant"
            className="w-full py-3 px-4 border border-white bg-white/20 backdrop-blur placeholder-white rounded-full text-white outline-none xl:py-6 xl:px-7"
          />
          <div className="absolute p-1 rounded-full bg-[#525A55] mr-3 cursor-pointer xl:p-3">
            <IoSearch className=" w-5 h-5 xl:w-7 xl:h-7 text-white" />
          </div>
        </div>
      </div>
      <div className="absolute w-52 border bg-white/20 rounded-2xl p-5 text-white max-lg:hidden lg:top-[50%] lg:right-20">
        <p className="font-bold text-3xl">$65.00</p>
        <p className="font-bold">Dracena Fragnas</p>
      </div>
      <div className="absolute w-72  border bg-white/20  backdrop-blur py-3 px-5 text-white rounded-3xl max-lg:hidden lg:left-20 lg:bottom-20 xl:left-20 xl:bottom-44 ">
        <div className="flex flex-col">
          <p className="font-bold text-xl">Milan Jack</p>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-normal text-white/70 capitalize">
              home seller, usa
            </p>
            <div className="flex flex-row items-center gap-1 text-text-color-palette-1">
              <AiFillStar />
              <p>4.9 rating</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae error laborum.
          </p>
        </div>
        <div className="absolute -top-10 -right-2">
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
