import { dAppName } from 'config';
import RegistrationDiscord from 'pages/RegistrationDiscord';
import withPageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Ledger from './pages/Ledger';
import Reveal from './pages/Reveal';
import Transaction from './pages/Transaction';
import UnlockPage from './pages/UnlockPage';
import WalletConnect from './pages/WalletConnect';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  reveal: '/reveal',
  registrationdiscord: '/registrationdiscord'
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  },
  {
    path: routeNames.unlock,
    title: 'Unlock',
    component: UnlockPage
  },
  {
    path: routeNames.walletconnect,
    title: 'WalletConnect',
    component: WalletConnect
  },
  {
    path: routeNames.ledger,
    title: 'Ledger',
    component: Ledger
  },
  {
    path: routeNames.reveal,
    title: 'Reveal',
    component: Reveal
  },
  {
    path: routeNames.registrationdiscord,
    title: 'Registration_Discord',
    component: RegistrationDiscord
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
