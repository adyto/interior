import React from 'react';

const VisitItem = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#262626] py-8 gap-y-2 sm:py-10 sm:gap-y-3 md:py-12 md:gap-y-4 lg:py-14 xl:py-16  xl:gap-y-5">
      <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Ready for a{' '}
        <span className="text-text-color-palette-1">Site visit ?</span>
      </h1>
      <p className="text-white/80">Lorem ipsum dolo elit Lorem ipsum dolo</p>
      <button className="border-none bg-text-color-palette-1 text-white rounded-full py-2 px-4 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10">
        View Now
      </button>
    </div>
  );
};

export default VisitItem;
