import * as React from 'react';
import { useEffect, useState } from 'react';
import './_supply.css';

const Supply: () => JSX.Element = () => {
  const restEndpoint =
    // 'https://testnet-api.elrond.com/nfts/count?collection=EMINERS-89f633';
    'https://api.elrond.com/nfts/count?collection=EMINERS-5b421f';
  const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
  };

  const [apiResponse, setApiResponse] = React.useState('*** now loading ***');

  React.useEffect(() => {
    callRestApi().then((result) => setApiResponse(result));
  }, []);

  //CALL API
  // const value = MyComponent();
  const supplyTotal = 1200;
  const supplyLive = parseInt(apiResponse);
  const progress = (supplyLive / supplyTotal) * 100;
  const supplyText = supplyLive + ' / ' + supplyTotal;
  const [isSoldOut, setIsSoldOut] = useState(false);
  useEffect(() => {
    if (progress >= 100) {
      setIsSoldOut(true);
    }
  });

  return (
    <div className='supply-container'>
      <div className='shimmer'>1st PUBLIC SALE</div>
      <div className='price-text'>Price : 0.8 EGLD</div>
      <div className='progress-supply'>
        <div className='progress-value' style={{ width: progress + '%' }}></div>
      </div>
      {isSoldOut ? (
        <div className='supply-number'>SOLD-OUT</div>
      ) : (
        <div className='supply-number'>{supplyText}</div>
      )}
    </div>
  );
};

export default Supply;
