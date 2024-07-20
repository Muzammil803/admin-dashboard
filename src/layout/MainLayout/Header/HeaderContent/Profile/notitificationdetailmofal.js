import { Modal } from 'antd';
import MainCard from 'components/MainCard';
import ThemeInput from 'components/inputs/ThemeInput';
import { useEffect, useState } from 'react';
import { Grid, InputLabel, Select, MenuItem, FormControl, Stack, OutlinedInput, Button } from '@mui/material';
import { Spin } from 'antd';
import {
    toast
} from 'react-toastify';
import SimpleSelect from 'components/selects/SimpleSelect';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom"
import { Input } from 'antd';
import MultipleImageUpload from 'components/inputs/MultipleImageUpload';
import { Link, useNavigate } from 'react-router-dom';





const USerViewNotifiationMdoal = ({notificationModalView, setNotiModalView ,handleCancelNoti,userAgainData}) => {
 

    return (
        <>
            {/* <span onClick={showModal}>  {children}</span> */}
            <Modal title="Notification Full View"
                open={notificationModalView}
                footer={null}
                onCancel={handleCancelNoti}
                centered
                width={670}
            >
             <Grid>
                <h4>{userAgainData}</h4>
           
             </Grid>
            </Modal>
        </>

    );
};
const mapStateToProps = (state) => {
    return {
        getAllFlat: state?.GetAllFlat?.AllFlatData,
        getAllProperty: state?.GetAllProperty?.AllPropertyData,
        AllClientsData: state?.AllDataClientsReduc,
    };
};

export default connect(mapStateToProps)(USerViewNotifiationMdoal);
