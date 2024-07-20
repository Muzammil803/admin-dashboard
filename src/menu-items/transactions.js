// type
import { Home3, HomeTrendUp } from 'iconsax-react';
// icons
const icons = {
    navigation: Home3,
    transactions: HomeTrendUp
};

// ==============================|| MENU ITEMS - transactions ||============================== //

const transactions = {
    id: 'group-transactions',
    title: 'Transactions',
    icon: icons.navigation,
    type: 'group',
    children: [
        {
            id: 'all-transactions',
            title: 'All Transactions',
            type: 'item',
            url: '/transactions/all-transactions',
            icon: icons.transactions,
            breadcrumbs: true
        },
    ]
};

export default transactions;
