import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';

// project-imports
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

import IconButton from 'components/@extended/IconButton';
import { DRAWER_WIDTH } from 'config';

// assets
import { HambergerMenu } from 'iconsax-react';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  // common header
  const mainHeader = (
    <Toolbar sx={{ px: { xs: 2, sm: 4.5, lg: 8, bgcolor: "#ffff", boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px;" } }}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        variant="light"
        size="large"
        sx={{ color: 'sicpa.main', ml: { xs: 0, lg: -2 }, p: 1 }}
      >
        <HambergerMenu />
      </IconButton>
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    elevation: 0,
    sx: {
      bgcolor: "#ffff",
      backdropFilter: 'blur(8px)',
      zIndex: 1200,
      width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
    }
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

export default Header;
