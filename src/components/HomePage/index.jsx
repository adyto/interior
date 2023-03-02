import React from 'react';
import Navbar from '../Navbar';
import FeatureCard from './FeatureCard';
import HeroItem from './HeroItem';
import ProductItem from './ProductItem';
import InteriorCard from './InteriorCard';
import VisitItem from './VisitItem';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroItem />
      <FeatureCard />
      <ProductItem />
      <InteriorCard />
      <VisitItem />
      <div className="my-24 text-center cursor-pointer">
        <a
          target={'_blank'}
          href="https://www.figma.com/community/file/1206328922123569702"
        >
          Figma Files Documment
        </a>
      </div>
    </>
  );
};

export default HomePage;
