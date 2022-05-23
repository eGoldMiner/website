import * as React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import Presentation from 'components/Layout/Presentation';
import { routeNames } from 'routes';
import './_ledger.css';

const Ledger: () => JSX.Element = () => {
  const { LedgerLoginContainer } = DappUI;

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
        <div className='ledger-div-container'>
          <LedgerLoginContainer
            title=''
            wrapContentInsideModal={false}
            shouldRenderDefaultsCss={false}
            redirectAfterLogin={'/dashboard'}
            logoutRoute={'/unlock'}
          />
        </div>
      </div>
    </section>
  );
};

export default Ledger;
