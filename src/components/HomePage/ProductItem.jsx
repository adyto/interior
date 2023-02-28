import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imgProduct1, imgProduct2, imgProduct3, icCart } from '../../assets';

const ProductItem = () => {
  const dataProduct = [
    {
      img: imgProduct1,
      name: 'Modern Picture 1',
      price: 15,
    },
    {
      img: imgProduct2,
      name: 'Modern Picture 2',
      price: 20,
    },
    {
      img: imgProduct3,
      name: 'Modern Picture 3',
      price: 25,
    },
    {
      img: imgProduct1,
      name: 'Modern Picture 1',
      price: 15,
    },
    {
      img: imgProduct2,
      name: 'Modern Picture 2',
      price: 20,
    },
    {
      img: imgProduct3,
      name: 'Modern Picture 3',
      price: 25,
    },
    {
      img: imgProduct1,
      name: 'Modern Picture 1',
      price: 15,
    },
    {
      img: imgProduct2,
      name: 'Modern Picture 2',
      price: 20,
    },
    {
      img: imgProduct3,
      name: 'Modern Picture 3',
      price: 25,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="container mx-auto flex flex-col pt-10 pb-5 px-4 gap-2 xl:px-0">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          Best Select <span className="block">Product</span>
        </h1>
        <Link className="flex flex-row items-center gap-1">
          <p className="font-medium text-sm md:text-base lg:text-xl xl:text-2xl">
            See all colection
          </p>
          <HiOutlineArrowRight />
        </Link>
      </div>
      <div className="product-item relative">
        <Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={15}>
          {dataProduct.map((item, i) => (
            <SwiperSlide key={i}>
              <Link>
                <img src={item.img} className="w-full rounded-t-3xl" />
                <div className="flex flex-col px-2 py-4 md:px-3 md:py-4 2xl:px-7 2xl:pt-2 2xl:pb-14">
                  <div className="flex flex-row items-center justify-between">
                    <p className="font-Gotham text-sm lg:text-base">
                      {item.name}
                    </p>
                    <img
                      src={icCart}
                      className=" w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                    />
                  </div>
                  <p className="font-Gotham text-lg mt-1 mb-3">${item.price}</p>
                  <div className="flex flex-row gap-1 lg:gap-x-2">
                    {['Label1', 'Label2', 'Label3'].map((item) => (
                      <p className=" text-text-color-palette-1 border-2 border-text-color-palette-1 bg-[#F6FFF6] rounded-3xl text-xs p-1 lg:px-2 lg:py-1 ">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className=" max-lg:hidden absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-r from-transparent to-white" />
        </Swiper>
      </div>
    </div>
  );
};

export default ProductItem;
