// import { Link } from 'react-router-dom';

// material-ui
import { Grid,Typography } from '@mui/material';

// project-imports
import Logo from 'components/logo';
// import AuthSocButton from 'sections/auth/AuthSocButton';
// import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// assets
// import imgFacebook from 'assets/images/auth/facebook.svg';
// import imgTwitter from 'assets/images/auth/twitter.svg';
// import imgGoogle from 'assets/images/auth/google.svg';

// ================================|| LOGIN ||================================ //

const Login = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom:0 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, paddingTop:'5%' }} >
                  Login
            </Typography>
            
        </Grid>
      
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
