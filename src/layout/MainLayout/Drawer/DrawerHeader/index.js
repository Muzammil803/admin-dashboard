import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project-imports
import DrawerHeaderStyled from './DrawerHeaderStyled';

import Logo from 'components/logo';
import { HEADER_HEIGHT } from 'config';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        backgroundColor:"#ffff",
        minHeight: HEADER_HEIGHT,
        width: 'inherit',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: open ? '0px' : 0,

      }}
    >
      <Logo isIcon={!open} sx={{ width: open ? 'auto' : '100%', height: 'auto',  margin: 'auto', display: 'block'}}/>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
