import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Presentation from 'components/Layout/Presentation';
import './_pagenotfound.css';

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='pagenotfound-container'>
          <div className='pagenotfound-title'>
            Sorry Miner, this page does not exist !
          </div>
          <div className='pagenotfound-details'>{pathname}</div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
