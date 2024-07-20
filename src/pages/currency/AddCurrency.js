// material-ui

import MainCard from 'components/MainCard';
import ThemeInput from 'components/inputs/ThemeInput';
import { useEffect, useState } from 'react';
import { Grid, InputLabel, Button } from '@mui/material';
import { Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  toast
} from 'react-toastify';
import { dispatch } from 'store/index';
import { EditUpdateUser, CreateAddCurrency } from 'store/action/index';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const RegisterUser = ({ viewGetrole, allCompanies }) => {
  const location = useLocation()
  console.log('location.state',location.state);
  const [currency, setcurrency] = useState(location.state !== null ? location.state.currency : "");
  const [shortCode, setshortCode] = useState(location.state !== null ? location.state.short_code : "");
  const [buy, setbuy] = useState(location.state !== null ? location.state.buy : "");
  const [sell, setsell] = useState(location.state !== null ? location.state.sell : "");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleImageUpload = async (file, onSuccess, onError) => {
    try {
      setImage(file)
      onSuccess();
    } catch (error) {
      onError(error);
      error.message('Upload failed');
    }
  }
  const handleSubmit = () => {
    if (
      currency !== "" &&
      shortCode !== "" &&
      sell !== "" &&
      buy !== "") {


      if (location.state !== null) {
        const payload = {
          currency: currency,
          id: location.state?.id,
          short_code: shortCode,
          ...(image && { flag: image, }),
          buy,
          sell,
        }

        dispatch(EditUpdateUser({
          payload, setLoading: setLoading,
        }))

      } else {
        const payload = {
          currency: currency,
          short_code: shortCode,
          flag: image,
          buy,
          sell,
        }
        if (!image) {
          toast.error("Image is required")
          return false
        }
        dispatch(CreateAddCurrency({ payload, setLoading: setLoading, }))
      }

    } else {
      toast.error("Required Fields are empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        bodyClassName: 'toastStyle',
      });
    }


  }


  return (
    <MainCard>
      <Spin spinning={loading}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className='row'>
              <div className='col-md-4 my-2'>
                <ThemeInput id="currency" value={currency} onChange={(e) => setcurrency(e.target.value)} type="text" name="Currency*" placeholder="Eg. Paypal USD" />
              </div>
              <div className='col-md-4 my-2'>
                <ThemeInput id="shortCode" value={shortCode} onChange={(e) => setshortCode(e.target.value)} type="text" name="Short Code*" placeholder="Eg. USD" />
              </div>
              <div className='col-md-4 my-2'>
                <ThemeInput id="rate" value={buy} onChange={(e) => setbuy(e.target.value)} type="number" name="Buy Rate*" placeholder="Eg. 278.29" />
              </div>
              <div className='col-md-4 my-2'>
                <ThemeInput id="sell" value={sell} onChange={(e) => setsell(e.target.value)} type="number" name="Sell Rate*" placeholder="Eg. 275.1" />
              </div>
              <div className='col-md-4 my-2'>
                <InputLabel htmlFor="image-option">Currency Image*</InputLabel>

                <Upload
                  customRequest={({ file, onSuccess, onError }) =>
                    handleImageUpload(file, onSuccess, onError)
                  }
                  id={`image-option`}
                  listType="picture"
                  maxCount={1}
                  showUploadList={true}
                >
                  <Button fullWidth
                    className="flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none my-1"
                  >
                    <UploadOutlined style={{ marginRight: 10 }} /> Upload (Max: 1)
                  </Button>
                </Upload>
              </div>

            </div>


            <div className='my-3' style={{ textAlign: "end" }}>
              <Button
                onClick={handleSubmit}
                disableElevation
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                {location.state === null ? "Add Currency" : "Update Currency"}
              </Button>

            </div>
          </Grid>
        </Grid>

      </Spin>
    </MainCard>

  );
};

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(RegisterUser);