// material-ui
import { Button,Grid, LinearProgress,
    //  List, ListItemButton, ListItemIcon, ListItemText,
      Stack, Typography } from '@mui/material';
  
  // project-imports
  import MainCard from 'components/MainCard';
  // import Dot from 'components/@extended/Dot';
  import {Link} from 'react-router-dom';
  // assets
  import { Add } from 'iconsax-react';
  
  // =========================|| DATA WIDGET - ADD NEW TASK ||========================= //
  
  const ProjectRelease = ({counts}) => {
    return (
      <MainCard title="Currencies Data">
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>Overall Used Currencies</Typography>
                <Typography>29%</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={29} />
            </Stack>
          </Grid>
  
          <Grid item xs={12}>
            <Link to='/random/create-random-code'> 
              <Button  fullWidth variant="contained" startIcon={<Add />}>
                Add New Currencies
              </Button>
            </Link>
          </Grid>
        </Grid>
      </MainCard>
    );
  };
  
  export default ProjectRelease;