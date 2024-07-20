import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CompanySearchable from '../../helper/companySearchable';
// material-ui
import { useTheme } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// assets

// ==============================|| CHART ||============================== //

const TaskStatusChart = ({ color, data }) => {
  const theme = useTheme();

  // chart options
  const areaChartOptions = {
    chart: {
      id: 'new-stack-chart',
      type: 'area',
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 0
      }
    },
    dataLabels: {
      enabled: false
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: {
      x: {
        show: false
      }
    },
    grid: {
      show: false
    }
  };

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [color]
    }));
  }, [color, primary, secondary, line, theme]);

  const [series] = useState([{ name: 'UnVerified Pins', data }]);

  return <ReactApexChart options={options} series={series} type="area" height={60} />;
};

TaskStatusChart.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array
};
// ==============================|| CHART - PROJECT OVERVIEW ||============================== //

const ProjectOverview = ({ counts }) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState(null);
  const handleAutocompleteChange = (event, newValue) => {
    setSelectedValue(newValue); // Update the selected value
  };
  return (
    <MainCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Typography variant="h5">Verification Overview</Typography>
      </Stack>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={6}>
              <Stack spacing={0.25}>
                <Typography color="text.secondary">Validated Codes </Typography>
                <Typography variant="h5">{counts?.verfied_pin ?? 0}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <TaskStatusChart color={theme.palette.primary.main} data={[5, 25, 3, 10, 4, 50, 0]} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Stack spacing={0.25}>
                <Typography color="text.secondary">Invalidated Codes</Typography>
                <Typography variant="h5">{counts?.un_verfied_pin ?? 0}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <TaskStatusChart color={theme.palette.error.main} data={[0, 50, 4, 10, 3, 25, 5]} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <CompanySearchable selectedValue={selectedValue} onInputChange={handleAutocompleteChange} variant="filled" /> */}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProjectOverview;
