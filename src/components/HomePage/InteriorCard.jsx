import React from 'react';
import { Link } from 'react-router-dom';

import {
  imgInterior1,
  imgInterior2,
  imgInterior3,
  imgInterior4,
} from '../../assets';

const InteriorCard = () => {
  return (
    <div className="flex flex-col mt-6 sm:mt-10 md:mt-14 lg:mt-20 items-center">
      <h1 className="font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
        Interior Plant Reference
      </h1>
      <h2 className="text-[#4F4F4F] text-center text-sm sm:mt-2 sm:text-lg md:mt-4 lg:mt-8  lg:text-xl xl:text-2xl">
        make your home so comfortable with refreshing plants
      </h2>
      <div className="flex flex-row items-center px-4 my-4 sm:my-6  lg:my-4 lg:gap-x-14 xl:mt-16 xl:gap-x-16 xl:mb-12">
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-3xl  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 before:rounded-3xl w-80 h-72 sm:w-[500px] sm:h-[430px] md:w-[550px] md:h-[450px] lg:w-[600px] lg:h-[515px] xl:w-[700px] xl:h-[615px]"
          style={{ backgroundImage: `url(${imgInterior1})` }}
        >
          <Link className="absolute w-full top-2/4 text-center text-white font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            living room
          </Link>
        </div>
        <img
          src={imgInterior2}
          className="rounded-3xl max-lg:hidden lg:w-[320px] lg:h-[545px] xl:w-[420px] xl:h-[645px]"
        />
      </div>
      <div className="flex flex-row gap-x-16 items-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
        <img
          src={imgInterior3}
          className="rounded-3xl max-lg:hidden lg:w-[320px] lg:h-[545px] xl:w-[420px] xl:h-[645px]"
        />
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-3xl  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 before:rounded-3xl w-80 h-72 sm:w-[500px] sm:h-[430px] md:w-[550px] md:h-[450px] lg:w-[600px] lg:h-[515px] xl:w-[700px] xl:h-[615px]"
          style={{ backgroundImage: `url(${imgInterior4})` }}
        >
          <Link className="absolute w-full top-2/4 text-center text-white font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            see all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteriorCard;
