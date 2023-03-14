import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import chartImg from '../assets/chart.png';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const dataNavbar = [
    {
      name: 'home',
      icon: <AiFillHome />,
    },
    {
      name: 'shop',
      icon: <HiShoppingCart />,
    },
    {
      name: 'about-us',
      icon: <BsFillInfoCircleFill />,
    },
    {
      name: 'contact',
      icon: <RiContactsFill />,
    },
  ];
  return (
    <div className="relative">
      <div className="absolute z-10 w-full pt-8 container mx-auto   max-md:hidden">
        <div className="flex flex-row justify-end items-center gap-32">
          <div className="flex flex-row gap-12">
            {['home', 'shop', 'about-us', 'contact'].map((item) => (
              <Link className="text-text-color-palette-3 capitalize font-semibold text-lg">
                {item === 'about-us' ? 'About Us' : item}
              </Link>
            ))}
          </div>
          <div className="relative cursor-pointer">
            <HiShoppingBag className="w-10 h-10 text-text-color-palette-3" />
            <div className="absolute top-1 right-0 border-none bg-text-color-palette-3 px-1.5  rounded-full text-sm text-text-color-palette-2 font-bold">
              2
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-10 bg-slate-300/70 w-full h-14 backdrop-blur-sm border-b-[1px] border-slate-300/20 md:hidden">
        <div className="flex flex-row justify-between h-full items-center px-4">
          <h1 className="text-text-color-palette-2 font-bold text-2xl">
            Interior
          </h1>
          <HiShoppingBag
            className="w-8 h-auto"
            onClick={() => setToggle(true)}
          />
        </div>
      </div>
      {toggle && (
        <div className="fixed inset-y-0 right-0 w-2/3 z-20 bg-slate-300/70 backdrop-blur-sm px-4 py-3">
          <div className="flex flex-row justify-end items-center">
            <IoMdClose
              onClick={() => setToggle(false)}
              className="w-8 h-auto text-text-color-palette-2"
            />
          </div>
          <p className="flex justify-center items-center h-full">
            No More Item
          </p>
        </div>
      )}
      <div className=" fixed z-10 bg-slate-300/70 w-full backdrop-blur-sm border-t-[1px] border-slate-300/20 inset-x-0 bottom-0 h-14 lg:hidden">
        <div className="flex flex-row w-full h-full items-center justify-center">
          {/* className="text-text-color-palette-2 capitalize font-semibold text-base flex flex-col w-40 text-center" */}
          {dataNavbar.map((item) => (
            <NavLink
              to={`/${item.name}` === '/home' ? '/' : `/${item.name}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-text-color-palette-1 capitalize font-semibold text-base flex flex-col w-40 text-center'
                  : 'text-text-color-palette-2 capitalize font-semibold text-base flex flex-col w-40 text-center'
              }
            >
              <span className="w-full justify-center flex">{item.icon}</span>
              {item.name === 'about-us' ? 'About Us' : item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
