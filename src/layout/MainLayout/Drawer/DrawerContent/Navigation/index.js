import { useLayoutEffect, useState } from 'react';

// material-ui
import { Box, Typography } from '@mui/material';

// project-imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

import { useSelector } from 'store';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  let items = [];
  const { drawerOpen } = useSelector((state) => state.menu);
  const [selectedItems, setSelectedItems] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [menuItems, setMenuItems] = useState({ items });


  useLayoutEffect(() => {
    setMenuItems(menuItem);
    // eslint-disable-next-line
  }, [menuItem]);

  const lastItem = null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems = [];
  let lastItemId;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items.slice(lastItem - 1, menuItems.items.length).map((item) => ({
      title: item.title,
      elements: item.children,
      icon: item.icon
    }));
  }

  const navGroups = menuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return (
          <NavGroup
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });
  return (
    <Box
      sx={{
        bgColor:"white",
        pt: drawerOpen ? 2 : 0,
        '& > ul:first-of-type': { mt: 0 },
        display: 'block',
        
      }}
    >
      {navGroups}
    </Box>
  );
};

export default Navigation;
