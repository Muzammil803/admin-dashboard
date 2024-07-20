import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
// import IconButton from 'components/@extended/IconButton';

// assets
// import { More } from 'iconsax-react';

// ==============================|| CHART WIDGET - ECOMMERCE CARD  ||============================== //

const EcommerceDataCard = ({ title, count, color, iconPrimary, children }) => {

  return (
    <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar variant="rounded" color={color}>
                {iconPrimary}
              </Avatar>
              <Typography variant="h5">{title}</Typography>
            </Stack>
            
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <MainCard content={false} sx={{ bgcolor: 'background.default', border: 'none' }}>
            <Box sx={{ p: 2, pb: 1.25 }}>
              <Grid container spacing={3}>
                <Grid item xs={7}>
                  {children}
                </Grid>
                <Grid item xs={5} sx={{display:"flex", alignItems:"center"}}>
                  {/* <Stack spacing={0}> */}
                    <Typography variant="h4" sx={{textAlign: 'center'}}>{count}</Typography>
                    {/* {percentage} */}
                  {/* </Stack> */}
                </Grid>
              </Grid>
            </Box>
          </MainCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

EcommerceDataCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.node,
  color: PropTypes.string,
  iconPrimary: PropTypes.node,
  children: PropTypes.node
};

export default EcommerceDataCard;