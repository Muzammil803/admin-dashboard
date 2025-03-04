import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| AUTHENTICATION - CARD ||============================== //

const AuthCard = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 450},
      
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);

AuthCard.propTypes = {
  children: PropTypes.node
};

export default AuthCard;
