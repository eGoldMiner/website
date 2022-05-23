import * as React from 'react';
import { Link } from 'react-router-dom';
import Presentation from 'components/Layout/Presentation';
import { routeNames } from 'routes';
import './_home.css';
import Supply from '../../components/Layout/Supply';

const Home = () => {
  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='div-home-container'>
          <Link
            to={routeNames.unlock}
            className='login-btn'
            data-testid='loginBtn'
          >
            Connect your wallet
          </Link>
          <Supply />
        </div>
      </div>
    </section>
  );
};

export default Home;
