import * as React from 'react';
import { DappUI, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';
import { routeNames } from 'routes';
import './_transaction.css';
import '@elrondnetwork/dapp-core/build/index.css';

const Transaction = () => {
  const { search } = useLocation();
  const { network } = useGetNetworkConfig();
  const query = new URLSearchParams(search);
  const { status, txHash } = Object.fromEntries(query);

  return status === 'success' ? (
    <DappUI.PageState
      icon={faCheck}
      iconClass='fa-3x text-success'
      className='dapp-icon icon-medium test'
      title='Transaction submitted successfully'
      description={
        <>
          <p>
            <a
              href={`${network.explorerAddress}/transactions/${txHash}`}
              {...{
                target: '_blank'
              }}
              className='tx-link'
              title='View in Explorer'
            >
              {txHash}
            </a>
          </p>
          <Link to={routeNames.dashboard} className='btn btn-primary mt-3 test'>
            Back to dashboard
          </Link>
        </>
      }
    />
  ) : (
    <DappUI.PageState
      icon={faTimes}
      iconClass='fa-3x text-danger'
      className='dapp-icon icon-medium test'
      title='Error sending transaction'
      description={
        <>
          <p>Try again</p>
          <a href={routeNames.dashboard} className='btn btn-primary mt-3 test'>
            Back to dashboard
          </a>
        </>
      }
    />
  );
};

export default Transaction;
