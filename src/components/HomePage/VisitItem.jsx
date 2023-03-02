import React from 'react';

const VisitItem = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#262626] py-16">
      <h1 className="text-white font-semibold xl:text-6xl">
        Ready for a{' '}
        <span className="text-text-color-palette-1">Site visit ?</span>
      </h1>
      <p className="text-white/80 xl:mt-4 xl:mb-6">
        Lorem ipsum dolo elit Lorem ipsum dolo
      </p>
      <button className="border-none bg-text-color-palette-1 text-white rounded-full xl:py-5 xl:px-10">
        View Now
      </button>
    </div>
  );
};

export default VisitItem;
