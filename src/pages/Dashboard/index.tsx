import * as React from 'react';
import { useGetAccountInfo, DappUI, logout } from '@elrondnetwork/dapp-core';
import Presentation from 'components/Layout/Presentation';
import Supply from '../../components/Layout/Supply';
import LogoElrond from './../../assets/img/logo_elrond.svg';
import LogoLogout from './../../assets/img/logout.svg';
import Actions from './Actions';
import './_dashboard.css';

const Dashboard = () => {
  const { address, account } = useGetAccountInfo();
  const beginaddress = address.substring(0, 5);
  const endaddress = address.substring(address.length - 5);
  const addressDisplay = beginaddress + '...' + endaddress;
  const addressLink = 'https://explorer.elrond.com/accounts/' + address;

  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='dashboard-container'>
          <div className='address-container'>
            <img className='address-logo-elrond' src={LogoElrond} />
            <a
              href={addressLink}
              target='_blank'
              rel='noreferrer'
              className='text-address'
            >
              {addressDisplay}
            </a>
            <img
              className='address-logo-logout'
              src={LogoLogout}
              onClick={() => logout('/')}
            />
          </div>
          <div className='balance-container'>
            <p>
              You currently have &nbsp;
              <DappUI.Denominate
                value={account.balance}
                data-testid='balance'
              />
            </p>
          </div>
          <div className='action-container'>
            <Actions />
          </div>
          <div className='supply-container'>
            <Supply />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
