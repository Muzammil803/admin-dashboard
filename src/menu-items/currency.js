// type
import { Home3, HomeTrendUp } from 'iconsax-react';
// icons
const icons = {
    navigation: Home3,
    currency: HomeTrendUp
};

// ==============================|| MENU ITEMS - currency ||============================== //

const currency = {
    id: 'group-currency',
    title: 'Currencies',
    icon: icons.navigation,
    type: 'group',
    children: [
        {
            id: 'all-currency',
            title: 'All Currency',
            type: 'item',
            url: '/currency/all-currency',
            icon: icons.currency,
            breadcrumbs: true
        },
        {
            id: 'create-currency',
            title: 'Create Currency',
            type: 'item',
            url: '/currency/add-currency',
            icon: icons.currency,
            breadcrumbs: true
        }
    ]
};

export default currency;
