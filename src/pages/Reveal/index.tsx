import * as React from 'react';
import './_reveal.css';
import ReactPlayer from 'react-player';

const Reveal: () => JSX.Element = () => {
  const restEndpoint1 = 'https://api.elrond.com/transactions/';
  const restEndpoint2 = 'https://api.elrond.com/nfts/';

  const callApiGetUrl = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const txHash = queryParams.get('txHash');

    const endPoint1 = restEndpoint1 + txHash;
    const response1 = await fetch(endPoint1);
    const jsonResponse1 = await response1.json();

    const endPoint2 = restEndpoint2 + jsonResponse1.operations[1].identifier;
    const response2 = await fetch(endPoint2);
    const jsonResponse2 = await response2.json();

    return JSON.stringify(jsonResponse2.url);
  };

  const callApiGetName = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const txHash = queryParams.get('txHash');

    const endPoint1 = restEndpoint1 + txHash;
    const response1 = await fetch(endPoint1);
    const jsonResponse1 = await response1.json();

    const endPoint2 = restEndpoint2 + jsonResponse1.operations[1].identifier;
    const response2 = await fetch(endPoint2);
    const jsonResponse2 = await response2.json();

    return JSON.stringify(jsonResponse2.name);
  };

  const [urlMiner, setUrlMiner] = React.useState(' Loading... ');
  const [minerName, setMinerName] = React.useState(' Loading... ');

  React.useEffect(() => {
    callApiGetUrl().then((result) => setUrlMiner(result));
    callApiGetName().then((result) => setMinerName(result));
  }, []);

  return (
    <div className='reveal-container'>
      <div className='reveal-text'>Here is your mint :</div>
      <div className='reveal-hidden' />
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={urlMiner.substring(1, urlMiner.length - 1)}
          volume={0}
          muted={true}
          playing={true}
          loop={true}
          controls={false}
          playsinline={true}
          width='100%'
          height='100%'
        />
      </div>
      <div className='reveal-text'>
        {minerName.substring(1, minerName.length - 1)}
      </div>
    </div>
  );
};

export default Reveal;
