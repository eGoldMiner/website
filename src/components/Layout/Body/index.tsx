import './_body.css';
import GoldNugget from 'assets/img/gold_nugget.png';
import Irving from 'assets/img/Irving.gif';
import Kanpo from 'assets/img/Kanpo.gif';
import Kartabble from 'assets/img/Kartabble.gif';
import PresentationVideo from 'assets/img/Presentation.mp4';

const Body: () => JSX.Element = () => {
  // const addressMint = 'http://app.' + window.location.host;
  const addressMint = 'https://app.elrondminers.com';
  // href={addressMint}
  return (
    <div>
      <section className='main-section'>
        <div>
          <video
            className='video-presentation'
            src={PresentationVideo}
            muted
            loop
            autoPlay
            playsInline
          ></video>
        </div>
        <div>
          A collection of 7,000 3D animated miners mining real gold !
          <br />
          The first NFT collection that car earn you real gold bars delivered to your home.
          <br />
          We ship the gold all around the world with a custom collection card of your NFT.
        </div>
      </section>

      <section className='new-section mint-section'>
        <div className='mint-button'>
          <a href={addressMint}>MINT LIVE</a>
        </div>
      </section>

      <section className='new-section presentation-section'>
        <div>
          <h2
            id='presentation'
            className='title-section gold-text'
            data-aos='zoom-in'
            data-aos-once='true'
          >
            Presentation
          </h2>
        </div>
        <div>
          <p>
            The 7,000 Elrond Miners are automatically and randomly generated.
            <br />
            Elrond Miners are not only an images of classNameic gold miners,
            those miners can also mine gold inside a cave and bring you rewards.
            <br />
            As before, gold miners work hard for rewards. Today they are going
            to work for you to bring you real gold bars.
          </p>
        </div>
      </section>

      <section className='new-section roadmap-section'>
        <div>
          <h2
            id='roadmap'
            className='title-section gold-text'
            data-aos='zoom-in'
            data-aos-once='true'
          >
            Roadmap
          </h2>
        </div>
        <div className='roadmap-container'>
          <div className='roadmap'>
            <ul>
              <li data-aos='fade-in' data-aos-offset='250' data-aos-once='true'>
                <span
                  data-aos='flip-right'
                  data-aos-offset='250'
                  data-aos-once='true'
                >
                  Q1 2022
                </span>
                <div>
                  <h3>Preparation of the pickaxes</h3>
                  <p>
                    -&#160;&#160;&#160;Disclosure social networks and the
                    website
                    <br />
                    -&#160;&#160;&#160;Reveal of the first 3D animated NFTs
                    <br />
                    -&#160;&#160;&#160;Selection of Miner Pioneer who will
                    participate to private sale
                    <br />
                    -&#160;&#160;&#160;Launch of the first private sale (100
                    NFTs available)
                    <br />
                    -&#160;&#160;&#160;Giveaways and gifts for members
                    <br />
                    -&#160;&#160;&#160;Collaboration with other collections
                  </p>
                </div>
              </li>
              <li data-aos='fade-in' data-aos-offset='250' data-aos-once='true'>
                <span
                  data-aos='flip-right'
                  data-aos-offset='250'
                  data-aos-once='true'
                >
                  Q2 2022
                </span>
                <div>
                  <h3>Work of the miners</h3>
                  <p>
                    -&#160;&#160;&#160;Launch of the second private sale (100
                    NFTs available)
                    <br />
                    -&#160;&#160;&#160;Launch of the first public sale (1000
                    NFTs)
                    <br />
                    -&#160;&#160;&#160;Giveaways of real gold every week
                    <br />
                    -&#160;&#160;&#160;Community based decisions
                    <br />
                    -&#160;&#160;&#160;Launch of the second public sale (2500
                    NFTs)
                    <br />
                    -&#160;&#160;&#160;Development of an interactive tool to
                    retrieve your rewards
                    <br />
                    -&#160;&#160;&#160;Launch of the last public sale (3300
                    NFTs)
                    <br />
                    -&#160;&#160;&#160;Deployment of our validator node (sPoS)
                    <br />
                    -&#160;&#160;&#160;Start of the rewards distribution
                  </p>
                </div>
              </li>
              <li data-aos='fade-in' data-aos-offset='250' data-aos-once='true'>
                <span
                  data-aos='flip-right'
                  data-aos-offset='250'
                  data-aos-once='true'
                >
                  Q3 2022
                </span>
                <div>
                  <h3>Improvment of working conditions</h3>
                  <p>
                    -&#160;&#160;&#160;Giveaway of real gold every week
                    <br />
                    -&#160;&#160;&#160;Release of a teaser for the new Elrond
                    Miners game
                  </p>
                </div>
              </li>
              <li data-aos='fade-in' data-aos-offset='250' data-aos-once='true'>
                <span
                  data-aos='flip-right'
                  data-aos-offset='250'
                  data-aos-once='true'
                >
                  Q4 2022
                </span>
                <div>
                  <h3>Passage to the bronze Age</h3>
                  <p>
                    -&#160;&#160;&#160;New system to enhance your miner&apos;s
                    efficiency
                  </p>
                </div>
              </li>
              <li data-aos='fade-in' data-aos-offset='250' data-aos-once='true'>
                <span
                  data-aos='flip-right'
                  data-aos-offset='250'
                  data-aos-once='true'
                >
                  YEAR 2023
                </span>
                <div>
                  <h3>Passage to the Iron Age</h3>
                  <p>
                    -&#160;&#160;&#160;Release of the Elrond Miners game
                    <br />
                    -&#160;&#160;&#160;Launch of new collections that you decide
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img className='roadmap-background' src={GoldNugget} no-repeat></img>
        </div>
      </section>

      <section className='new-section faq-section'>
        <div>
          <h2
            id='faq'
            className='title-section gold-text'
            data-aos='zoom-in'
            data-aos-once='true'
          >
            FAQ
          </h2>
        </div>
        <div className='faq-container'>
          <details
            data-aos='slide-up'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <summary className='faq-question'>
              What are the Elrond Miners ?
            </summary>
            <div className='faq-content'>
              <p>
                Elrond Miners are a team of 7,000 NFTs randomly generated living
                on the Elrond Blockchain. Thanks to your miners you wil be able to
                earn real gold at home, but also EGLD each week.
              </p>
            </div>
          </details>
          <details
            data-aos='slide-up'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <summary className='faq-question'>
              Why should I invest in Elrond Miners ?
            </summary>
            <div className='faq-content'>
              <p>
                We are the first NFT collection with such IRL utilities.
                If you believe that gold is a safe investment, then Elrond Miners is too.
              </p>
            </div>
          </details>
          <details
            data-aos='slide-up'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <summary className='faq-question'>
              How can I recruit miner onto my team ?
            </summary>
            <div className='faq-content'>
              <p>
                Mint is <a href='https://app.elrondminers.com'>LIVE </a>
              </p>
            </div>
          </details>
          <details
            data-aos='slide-up'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <summary className='faq-question'>
              Will our miners really work for us ? How ?
            </summary>
            <div className='faq-content'>
              <p>
                Yes, they will work hard to make passive income. Mint revenue
                will be used to farm your rewards.
              </p>
            </div>
          </details>
          <details
            data-aos='slide-up'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <summary className='faq-question'>Why Elrond ?</summary>
            <div className='faq-content'>
              <p>
                One of the fastest and with very low fees, we are convinced that
                Elrond is among the most powerful blockchain. This is why miners
                choose to mine on the best blockchain, Elrond.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section className='new-section team-section'>
        <div>
          <h2
            id='team'
            className='title-section gold-text'
            data-aos='zoom-in'
            data-aos-once='true'
          >
            Team
          </h2>
        </div>
        <div className='cards-section'>
          <div
            className='card-team'
            data-aos='flip-up'
            data-aos-offset='350'
            data-aos-once='true'
          >
            <div className='card-team-image'>
              <img src={Irving}></img>
            </div>
            <div className='card-team-caption'>
              <h3>IRVING</h3>
              <p>Founder Miner</p>
            </div>
          </div>
          <div
            className='card-team'
            data-aos='flip-up'
            data-aos-offset='350'
            data-aos-once='true'
          >
            <div className='card-team-image'>
              <img src={Kartabble}></img>
            </div>
            <div className='card-team-caption'>
              <h3>KARTABBLE</h3>
              <p>Founder Miner</p>
            </div>
          </div>
          <div
            className='card-team'
            data-aos='flip-up'
            data-aos-offset='350'
            data-aos-once='true'
          >
            <div className='card-team-image'>
              <img src={Kanpo}></img>
            </div>
            <div className='card-team-caption'>
              <h3>KANPO</h3>
              <p>Artist Miner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
