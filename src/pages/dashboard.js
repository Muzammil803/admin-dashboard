// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography } from '@mui/material';
// project-imports
import EcommerceDataCard from 'components/cards/statistics/EcommerceDataCard';

// import WelcomeBanner from 'sections/dashboard/WelcomeBanner';
import EcommerceDataChart from 'sections/dashboard/EcommerceDataChart';

import ProjectOverview from 'sections/dashboard/ProjectOverview';
import ProjectRelease from 'sections/dashboard/ProjectRelease';
// import AssignUsers from 'sections/dashboard/AssignUsers';

import Transactions from 'sections/dashboard/Transactions';
import TotalIncome from 'sections/dashboard/TotalIncome';

// assets
import { Buildings2, FormatCircle, Category2, Profile2User } from 'iconsax-react';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  

  let permissionUser = localStorage.getItem('LoginData');
  let permissions = JSON.parse(permissionUser)?.permissions;

  const allowedPermissions = permissions && permissions.length !== 0 ? permissions.map((permission) => permission?.permission) : [];


  const theme = useTheme();
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* <Grid item xs={12}>
        <WelcomeBanner />
      </Grid> */}

      {/* row 1 */}
      {allowedPermissions.includes('user-count') ? (
      <Grid item xs={6} sm={4} lg={3}>
        <EcommerceDataCard
          title="Total Users"
          count={129}
          iconPrimary={<Profile2User           
            color="#2790c3"
            variant="TwoTone"
            />}
     
        >
          <EcommerceDataChart color={theme.palette.primary.main} count= {179} />
        </EcommerceDataCard>
      </Grid>
      ):null}

      <Grid item xs={6} sm={4} lg={3}>
        <EcommerceDataCard
          title="Total Companies"
          count={21}
          color="warning"
          iconPrimary={
            <Buildings2            
            color={theme.palette.warning.dark}
            variant="TwoTone"
           />
          
          }
         
        >
          <EcommerceDataChart color={theme.palette.warning.dark}  count= {87} />
        </EcommerceDataCard>
      </Grid>

      <Grid item xs={6} sm={4} lg={3}>
        <EcommerceDataCard
          title="Total Brands"
          count= {12} 
          color={theme.palette.dark} 
          iconPrimary={<Category2
            color={theme.palette.dark} 
            variant="TwoTone"
          />}
        
        >
          <EcommerceDataChart color="sicpa.light"   count= {85}/>
        </EcommerceDataCard>
      </Grid>
      
      <Grid item xs={6} sm={4} lg={3}>
        <EcommerceDataCard
          title="Total Pins"
          count= {21} 
          color="success"
          iconPrimary={<FormatCircle
                          color={theme.palette.success.darker} 
                          variant="TwoTone"
                        />
         }
          percentage={
            <Typography color="success.darker" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {/* <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6% */}
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.success.darker}  count= {31}/>
        </EcommerceDataCard>
      </Grid>
   

      <Grid item xs={6} sm={4} lg={3}>
        <EcommerceDataCard
          title="Total Verified Pins"
          count= {43} 
          color="warning" 
          iconPrimary={<Category2
            color={theme.palette.warning.dark} 
            variant="TwoTone"
          />}
        
        >
          <EcommerceDataChart color={theme.palette.warning.dark}   count= {71}/>
        </EcommerceDataCard>
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProjectOverview  />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Stack spacing={3}>
          <ProjectRelease />
        </Stack>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={6}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalIncome />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;

