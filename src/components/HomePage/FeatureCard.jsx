import React from 'react';

import imgFeature1 from '../../assets/imgFeature1.png';
import imgFeature2 from '../../assets/imgFeature2.png';
import imgFeature3 from '../../assets/imgFeature3.png';

const FeatureCard = () => {
  return (
    <div className="flex flex-col gap-y-3 py-6 md:py-24 sm:flex-row">
      <div className="flex flex-row gap-4 items-center w-52 container mx-auto lg:max-w-xs ">
        <img src={imgFeature1} className=" w-12 h-12 lg:w-16 lg:h-16" />
        <div className="flex flex-col">
          <p className="font-semibold text-text-color-palette-4 text-sm lg:text-base">
            Free Shapping
          </p>
          <p className="text-[#828282] text-xs lg:text-base">
            No charge for each delivery
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center w-52 container mx-auto lg:max-w-xs ">
        <img src={imgFeature2} className=" w-12 h-12 lg:w-16 lg:h-16" />
        <div className="flex flex-col">
          <p className="font-semibold text-text-color-palette-4 text-sm lg:text-base">
            Quick Payment
          </p>
          <p className="text-[#828282] text-xs lg:text-base">
            100% secure payment
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center w-52 container mx-auto lg:max-w-xs ">
        <img src={imgFeature3} className=" w-12 h-12 lg:w-16 lg:h-16" />
        <div className="flex flex-col">
          <p className="font-semibold text-text-color-palette-4 text-sm lg:text-base">
            24/7 Support
          </p>
          <p className="text-[#828282] text-xs lg:text-base">Quick support</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
