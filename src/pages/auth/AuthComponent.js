import React from 'react'

// material-ui
import { Grid,Typography } from '@mui/material';

// project-imports
import Logo from 'components/logo';
import AuthWrapper from 'sections/auth/AuthWrapper';

const AuthComponent = ({name, component}) => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom:0 }}>
          <Logo />
            <Typography variant="h2" sx={{ fontWeight: 700, paddingTop:'7%', paddingBottom:'7%' }} >
                  {name}
            </Typography>
            
        </Grid>
      
        <Grid item xs={12}>
          {component}
        </Grid>
      </Grid>
    </AuthWrapper>
  )
}

export default AuthComponent
