import React from 'react';
import Navbar from '../Navbar';
import FeatureCard from './FeatureCard';
import HeroItem from './HeroItem';
import ProductItem from './ProductItem';
import InteriorCard from './InteriorCard';
import VisitItem from './VisitItem';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroItem />
      <FeatureCard />
      <ProductItem />
      <InteriorCard />
      <VisitItem />
      <Footer />
      <div className="my-24 text-center cursor-pointer">
        <a
          target={'_blank'}
          href="https://www.figma.com/community/file/1206328922123569702"
        >
          Figma Files Documment
        </a>
        <p>© 2023 ady.to - All rights reserved.</p>
      </div>
    </>
  );
};

export default HomePage;
