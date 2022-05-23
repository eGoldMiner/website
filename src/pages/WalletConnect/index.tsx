import * as React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import Presentation from 'components/Layout/Presentation';
import { routeNames } from 'routes';
import './_walletConnect.css';

const WalletConnect: () => JSX.Element = () => {
  const { WalletConnectLoginContainer } = DappUI;

  const { isLoggedIn } = useGetLoginInfo();
  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.dashboard;
    }
  }, [isLoggedIn]);

  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='walletconnect-div-container'>
          <WalletConnectLoginContainer
            title=''
            wrapContentInsideModal={false}
            redirectAfterLogin={true}
            callbackRoute={'/dashboard'}
            logoutRoute={'/unlock'}
            shouldRenderDefaultCss={false}
          />
        </div>
      </div>
    </section>
  );
};

export default WalletConnect;
