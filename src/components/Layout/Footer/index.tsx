import LogoElrond from './../../../assets/img/logo_elrond.svg';
import './_footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='line-footer'></div>
      <a href='https://www.elrond.com' target='blank'>
        <img className='logo-elrond' src={LogoElrond} />
      </a>
      {/* Copyright */}
      <div className='copyright'>
        Made with ❤️ by Elrond Miners.
        <br />
        Copyright ©2022. All rights reserved Elrond Miners.
      </div>
      {/* Lights footer */}
      <div className='lights-container'>
        <div className='lightings'>
          <section className='light-one'>
            <section className='light-two'>
              <section className='light-three'>
                <section className='light-four'>
                  <section className='light-five' />
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
