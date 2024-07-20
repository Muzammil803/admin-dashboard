// type
import { Home3, HomeTrendUp } from 'iconsax-react';
// icons
const icons = {
    navigation: Home3,
    services: HomeTrendUp
};

// ==============================|| MENU ITEMS - services ||============================== //

const services = {
    id: 'group-services',
    title: 'Service',
    icon: icons.navigation,
    type: 'group',
    children: [
        {
            id: 'all-services',
            title: 'All Services',
            type: 'item',
            url: '/services/all-services',
            icon: icons.services,
            breadcrumbs: true
        },
        {
            id: 'create-services',
            title: 'Create Service',
            type: 'item',
            url: '/services/add-services',
            icon: icons.services,
            breadcrumbs: true
        }
    ]
};

export default services;
