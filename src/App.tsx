import { DappUI, DappProvider } from '@elrondnetwork/dapp-core';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import Body from 'components/Layout/Body';
import Footer from 'components/Layout/Footer';
import Navbar from 'components/Layout/Navbar';
import PageNotFound from 'pages/PageNotFound';
import routes from 'routes';
import './App.css';

const environment = 'mainnet';

const { TransactionsToastList, SignTransactionsModals, NotificationModal } =
  DappUI;

const App = () => {
  if (window.location.host.split('.')[0] != 'app') {
    return (
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  } else {
    return (
      <Router>
        <DappProvider
          environment={environment}
          customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
          completedTransactionsDelay={200}
        >
          <Layout>
            <TransactionsToastList />
            <NotificationModal />
            <SignTransactionsModals className='custom-class-for-modals' />
            <Routes>
              {routes.map((route: any, index: number) => (
                <Route
                  path={route.path}
                  key={'route-key-' + index}
                  element={<route.component />}
                />
              ))}
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Layout>
        </DappProvider>
      </Router>
    );
  }
};

export default App;
