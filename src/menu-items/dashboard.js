// type
import { Home3 } from 'iconsax-react';
import { LuLayoutDashboard } from "react-icons/lu";
// icons
const icons = {
  navigation: Home3,
  dashboard: LuLayoutDashboard
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  // title: 'Navigation',
  icon: icons.navigation,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.dashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
