// material-ui
import {
  Grid, LinearProgress,
  Stack, Typography
} from '@mui/material';
  
  // project-imports
  import MainCard from 'components/MainCard';
    
  // =========================|| DATA WIDGET - ADD NEW TASK ||========================= //
  
  const ProjectRelease = ({counts}) => {
    return (
      <>
      <MainCard>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>Overall Transactions Successful</Typography>
                <Typography>75%</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={75} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      <MainCard>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>Transactions Failed</Typography>
                <Typography>10%</Typography>
              </Stack>
              <LinearProgress sx={{ color :"red "}} variant="determinate" value={10} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      </>
    );
  };
  
  export default ProjectRelease;