// project-imports
import currency from './currency';
import dashboard from './dashboard';
import services from './services';
import transactions from './transactions';
import users from './users';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    dashboard,
    transactions,
    currency,
    services,
    users
  ]
};

export default menuItems;