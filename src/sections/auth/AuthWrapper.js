import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project-imports
import AuthCard from './AuthCard';

// assets
import CompleteBackImage from 'assets/images/backCover1.png'

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Box sx={{
        width: "100%", height: "100vh", backgroundImage: `url(${CompleteBackImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        
      }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;