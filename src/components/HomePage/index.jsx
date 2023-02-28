import React from 'react';
import Navbar from '../Navbar';
import FeatureCard from './FeatureCard';
import HeroItem from './HeroItem';
import ProductItem from './ProductItem';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroItem />
      <FeatureCard />
      <ProductItem />
      <div className="w-full h-screen mx-auto container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        porro, quisquam libero et dignissimos modi deserunt natus labore aperiam
        odit. In atque doloribus necessitatibus velit, laboriosam modi
        dignissimos aut similique.
      </div>
    </>
  );
};

export default HomePage;
