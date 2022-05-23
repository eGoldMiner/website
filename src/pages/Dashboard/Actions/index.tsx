import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  transactionServices,
  useGetAccountInfo,
  useGetPendingTransactions,
  refreshAccount,
  useGetNetworkConfig
} from '@elrondnetwork/dapp-core';
import {
  Address,
  AddressValue,
  ContractFunction,
  ProxyProvider,
  Query
} from '@elrondnetwork/erdjs';
import { getTransactions } from 'apiRequests';
import { contractAddress } from 'config';
import './_actions.css';
import { routeNames } from 'routes';
import { StateType } from './../Transactions/types';

const Actions = () => {
  //Variables Globales
  const startMint = new Date('05/18/2022 11:00:00');

  const [eventTime, setEventTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nowNUTC = new Date();
      const now = new Date(
        nowNUTC.getUTCFullYear(),
        nowNUTC.getUTCMonth(),
        nowNUTC.getUTCDate(),
        nowNUTC.getUTCHours(),
        nowNUTC.getUTCMinutes(),
        nowNUTC.getUTCSeconds()
      );
      const difference = startMint.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEventTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const account = useGetAccountInfo();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const { network } = useGetNetworkConfig();
  const { address } = account;

  const [secondsLeft, setSecondsLeft] = React.useState<number>();
  const [hasPing, setHasPing] = React.useState<boolean>();
  const [transactionSessionId, setTransactionSessionId] = React.useState<
    string | null
  >(null);

  const mount = () => {
    if (secondsLeft) {
      const interval = setInterval(() => {
        setSecondsLeft((existing) => {
          if (existing) {
            return existing - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  };

  React.useEffect(mount, [hasPing]);

  React.useEffect(() => {
    const query = new Query({
      address: new Address(contractAddress),
      func: new ContractFunction('mint@01'),
      args: [new AddressValue(new Address(address))]
    });
    const proxy = new ProxyProvider(network.apiAddress);
    proxy
      .queryContract(query)
      .then(({ returnData }) => {
        console.log(returnData);
        const [encoded] = returnData;
        switch (encoded) {
          case undefined:
            setHasPing(true);
            break;
          case '':
            setSecondsLeft(0);
            setHasPing(false);
            break;
          default: {
            const decoded = Buffer.from(encoded, 'base64').toString('hex');
            setSecondsLeft(parseInt(decoded, 16));
            setHasPing(false);
            break;
          }
        }
      })
      .catch((err) => {
        console.error('Unable to call VM query', err);
      });
  }, [hasPendingTransactions]);

  const { sendTransactions } = transactionServices;

  const sendMintTransaction = async () => {
    const mintTransaction = {
      value: '800000000000000000',
      data: 'mint@01',
      receiver: contractAddress
    };
    await refreshAccount();

    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: mintTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Mint transaction',
        errorMessage: 'An error has occured during Mint',
        successMessage: 'Mint transaction successful'
      }
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  const {
    network: { apiAddress }
  } = useGetNetworkConfig();
  const { success, fail, hasActiveTransactions } =
    transactionServices.useGetActiveTransactionsStatus();

  const [state, setState] = React.useState<StateType>({
    transactions: [],
    transactionsFetched: undefined
  });

  const fetchData = () => {
    if (success || fail || !hasActiveTransactions) {
      getTransactions({
        apiAddress,
        address: account.address,
        timeout: 3000,
        contractAddress
      }).then(({ data, success: transactionsFetched }) => {
        refreshAccount();
        setState({
          transactions: data,
          transactionsFetched
        });
      });
    }
  };

  React.useEffect(fetchData, [hasActiveTransactions]);

  const { transactions } = state;

  const transactionStatus = transactionServices.useTrackTransactionStatus({
    transactionId: transactionSessionId,
    onSuccess: () => {
      console.log('success');
      getTransactions({
        apiAddress,
        address: account.address,
        timeout: 3000,
        contractAddress
      }).then(({ data, success: transactionsFetched }) => {
        refreshAccount();
        window.location.href =
          routeNames.reveal + '?txHash=' + data[0]['txHash'];
      });
    },
    onFail: () => console.log('fail'),
    onCancelled: () => console.log('canceled'),
    onCompleted: () => console.log('completed')
  });

  return (
    <div className='action-container'>
      {eventTime ? (
        <div className='btn-mint btn-enable' onClick={sendMintTransaction}>
          MINT
        </div>
      ) : (
        <div className='btn-mint btn-prohibit'>
          {('0' + days).slice(-2) +
            'D ' +
            ('0' + hours).slice(-2) +
            'H ' +
            ('0' + minutes).slice(-2) +
            'M ' +
            ('0' + seconds).slice(-2) +
            'S'}
        </div>
      )}
    </div>

    /* <div className='btn-mint btn-prohibit' onClick={sendMintTransaction}>
    SOLD-OUT
    </div> */
  );
};

export default Actions;
