import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  ListItemButton,
  Menu,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { AllTransactions } from "store/action/index";
import { Spin } from "antd";

// third-party
import ReactApexChart from "react-apexcharts";

// project-imports
import MainCard from "components/MainCard";
import Dot from "components/@extended/Dot";
import IconButton from "components/@extended/IconButton";
import { connect } from "react-redux";
import { dispatch } from "store/index";

// assets
import { ArrowUp, More } from "iconsax-react";



const TenatsPieChart = ({ allcount }) => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const [cusotktm, setCusottm] = useState();

  const { primary } = theme.palette.text;
  const line = theme.palette.divider;
  const grey200 = theme.palette.secondary[200];
  const backColor = theme.palette.background.paper;

  useEffect(() => {
    setLoading(true);
    // dispatch(AllTransactions({setLoading:setLoading}));
  }, []);
  // const [series,setseries] = useState(  [44, 55, 41, 17, 15],);


  const pieChartOptions = {
    chart: {
      type: "donut",
      height: 320,
    },
    labels: cusotktm || [],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  };



  const [series, setseries] = useState([]);
  const [options, setOptions] = useState(pieChartOptions);
  const [totalrent, setTotalrent] = useState();


  useEffect(() => {
    if (allcount && allcount.total_flats) {
      //   setseries([
      //     allcount?.total_due_payment + allcount?.total_paid_payment,
      //     allcount?.total_due_payment,
      //     allcount?.total_paid_payment,
      //   ]);
      const amountsArray = allcount?.top_paid_property?.map(item => item.total_amount !== null ? item.total_amount : 0);
      const newCustomCreate = allcount?.top_paid_property?.map(item => item?.property?.property_name);
      const sanitizedArray = newCustomCreate.map(value => value !== undefined ? value : "Other");
      setCusottm(sanitizedArray)
      // console.log("ddhdhddddddwwwssswssh", allcount?.top_paid_property);
      setseries(amountsArray)
      setOptions(pieChartOptions);

    }
  }, [allcount]);



  useEffect(() => {
    const primaryMain = theme.palette.primary.main;
    const primaryLighter = theme.palette.primary[700];
    const warning = "#D80000";
    const success = theme.palette.success.main;
    // console.log("jdjdjdjd", primaryLighter);
    const greenColor = "#00FF00";
    // setOptions((prevState) => ({
    //   ...prevState,
    //   colors: [ primaryMain,greenColor],
    //   xaxis: {
    //     labels: {
    //       style: {
    //         colors: [primary, primary, primary, primary, primary, primary, primary]
    //       }
    //     }
    //   },
    //   yaxis: {
    //     labels: {
    //       style: {
    //         colors: [primary]
    //       }
    //     }
    //   },
    //   grid: {
    //     borderColor: line
    //   },
    //   stroke: {
    //     colors: [backColor]
    //   }
    // }));
  }, [primary, line, grey200, backColor, theme]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={downSM ? 225 : 225}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(TenatsPieChart);
