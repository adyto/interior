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
    <div className="flex flex-col mt-20 items-center">
      <h1 className="font-semibold xl:text-6xl">Interior Plant Reference</h1>
      <h2 className="mt-8 text-[#4F4F4F] xl:text-2xl">
        make your home so comfortable with refreshing plants
      </h2>
      <div className="flex flex-row gap-x-16 items-center my-8 xl:mt-16 xl:mb-12">
        <div
          className=" px-0 relative bg-center bg-no-repeat bg-cover w-[700px] h-[615px]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 before:rounded-3xl rounded-3xl"
          style={{ backgroundImage: `url(${imgInterior1})` }}
        >
          <Link className="absolute w-full top-2/4 text-center text-white font-semibold xl:text-6xl">
            living room
          </Link>
        </div>
        <img src={imgInterior2} className="rounded-3xl max-lg:hidden" />
      </div>
      <div className="flex flex-row gap-x-16 items-center xl:mb-20">
        <img src={imgInterior3} className="rounded-3xl max-lg:hidden" />
        <div
          className="w-[700px] h-[615px] px-0 relative bg-center bg-no-repeat bg-cover  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 before:rounded-3xl rounded-3xl"
          style={{ backgroundImage: `url(${imgInterior4})` }}
        >
          <Link className="absolute w-full top-2/4 text-center text-white font-semibold xl:text-6xl">
            see all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteriorCard;
