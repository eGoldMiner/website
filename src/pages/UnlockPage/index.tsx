import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { Link } from 'react-router-dom';
import Presentation from 'components/Layout/Presentation';
import { routeNames } from 'routes';
import './_unlock.css';

export const UnlockRoute: () => JSX.Element = () => {
  const { ExtensionLoginButton, WebWalletLoginButton } = DappUI;

  const { isLoggedIn } = useGetLoginInfo();
  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.dashboard;
    }
  }, [isLoggedIn]);

  let buttonExtension;
  if (window.elrondWallet) {
    buttonExtension = (
      <ExtensionLoginButton
        shouldRenderDefaultCss={false}
        callbackRoute={routeNames.dashboard}
        loginButtonText={''}
      />
    );
  } else {
    buttonExtension = (
      <a
        href='https://chrome.google.com/webstore/detail/dngmlblcodfobpdpecaadgfbcggfjfnm?authuser=0&hl=en'
        className='btn-connection extension-login_wrapper'
        target='_blank'
        rel='noopener noreferrer'
      />
    );
  }

  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='login-container-unlock'>
          <div className='login-text'>Please select a login method :</div>
          <div className='btn-connection-section'>
            <div className='btn-connection-container'>
              <Link
                to={routeNames.walletconnect}
                className='btn-connection btn-connection-walletconnect'
              />
            </div>
            <div className='btn-connection-container'>{buttonExtension}</div>
            <div className='btn-connection-container'>
              <WebWalletLoginButton
                shouldRenderDefaultCss={false}
                callbackRoute={routeNames.dashboard}
                loginButtonText={''}
              />
            </div>
            <div className='btn-connection-container'>
              <Link
                to={routeNames.ledger}
                className='btn-connection btn-connection-ledger'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockRoute;
