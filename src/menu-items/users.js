// type
import { Home3, HomeTrendUp } from 'iconsax-react';
// icons
const icons = {
    navigation: Home3,
    users: HomeTrendUp
};

// ==============================|| MENU ITEMS - users ||============================== //

const users = {
    id: 'group-users',
    title: 'Users',
    icon: icons.navigation,
    type: 'group',
    children: [
        {
            id: 'all-users',
            title: 'All Users',
            type: 'item',
            url: '/users/all-users',
            icon: icons.users,
            breadcrumbs: true
        }
    ]
};

export default users;
