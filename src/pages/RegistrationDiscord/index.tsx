import * as React from 'react';
import './_registrationDiscord.css';
import Presentation from 'components/Layout/Presentation';
import LogoDiscord from '../../assets/img/logo_discord.png';

const RegistrationDiscord: () => JSX.Element = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const walletAddress = queryParams.get('address');
  console.log(walletAddress);
  const discordId = queryParams.get('discordName');
  console.log(discordId);

  let validData = true;
  if (walletAddress == null || discordId == null) {
    validData = false;
  }

  return (
    <section className='elrond-app-body'>
      <div className='presentation-container'>
        <Presentation />
      </div>
      <div className='component-container'>
        <div className='registrationd-container'>
          {validData ? (
            <div className='discord-text'>
              We have linked your discord to your wallet :
              <br />
              <br />
              <img className='registration-logo-discord' src={LogoDiscord} />
              {discordId}
              <img className='registration-logo-discord' src={LogoDiscord} />
              <br />
              {walletAddress}
              <br />
              <br />
              Now go back to the discord server and click on check roles
            </div>
          ) : (
            <div className='discord-text'>
              The wallet address is not correct
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationDiscord;
