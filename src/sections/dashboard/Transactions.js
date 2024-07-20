import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
// material-ui

import { Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Tab, Tabs, Typography } from '@mui/material';
import { AES, enc } from 'crypto-js';
import * as url from "../../store/constant/Endpoints";
// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// import IconButton from 'components/@extended/IconButton';
import { useEffect } from 'react';
import { dispatch } from 'store/index';
// import { GetAllSMSReport,  } from 'store/action/index';

// assets
import { Mobile, Verify, Copy } from 'iconsax-react';
import CompanySearchable from '../../helper/companySearchable';
import { Spin } from 'antd';
// ==============================|| TAB PANEL ||============================== //

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| DATA WIDGET - TYRANSACTIONS ||============================== //
const Transactions = ({ allSms, QrcodeReports, allcount }) => {



  let permissionUser = localStorage.getItem('data');

  let decryptedData = null;
  if (permissionUser) {
    try {
      // Code that may throw an exception
      decryptedData = AES.decrypt(permissionUser, url.encryptionSecret).toString(enc.Utf8);
      // ...
    } catch (error) {
      console.log(error, "er")
    }
  }

  const permissions = JSON.parse(decryptedData)?.permissions;


  const allowedPermissions = permissions && permissions.length !== 0 ? permissions.map((permission) => permission?.permission) : [];



  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [params, setParams] = useState({ page: 1 });
  const listItemBoxStyle = {
    width: '300px',
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (allowedPermissions.includes('qr-report')) {

    }


    if (allowedPermissions.includes('sms-report')) {
      // dispatch(AllCounts());

      // dispatch(GetAllSMSReport({ params: params, setLoading: setLoading }));

    }
  }, [params]);

  // const [anchorEl, setAnchorEl] = useState(null);

  // const open = Boolean(anchorEl);

  const handleAutocompleteChange = (event, data) => {
    // Check if the event object and its target property exist
    if (event && event.target) {
      const id = event.target.id;

      // Check if the 'id' property exists before using it
      if (id) {
        setParams({ ...params, company_id: data.id });
      } else {
        setParams({ page: 1 });
      }
    } else {
      setParams({ page: 1 });
    }

    setSelectedValue(data); // Update the selected value
  };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <MainCard content={false}>
      <Box sx={{ p: 3, pb: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="h5">Access Logs</Typography>
          {/* <CompanySearchable selectedValue={selectedValue} onInputChange={handleAutocompleteChange}/> */}

        </Stack>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ px: 3 }}>
            {allowedPermissions.includes('sms-report') &&
              <Tab label="All Transaction" {...a11yProps(0)} />}
            {allowedPermissions.includes('sms-report') &&
              <Tab label="SMS Transactions" {...a11yProps(1)} />}
            {allowedPermissions.includes('qr-report') && <Tab label="QR Transactions" {...a11yProps(2)} />}
          </Tabs>
        </Box>
        {allowedPermissions.includes('sms-report') && <TabPanel value={value} index={0}>
          <List disablePadding sx={{ '& .MuiListItem-root': { px: 3, py: 1.5 } }}>
            {allcount &&
              allcount?.allTransaction?.length !== 0 &&
              allcount?.allTransaction?.map((item, key) => (
                <ListItem
                  key={key}
                  divider
                  secondaryAction={
                    <Stack spacing={0.25} alignItems="flex-end">
                      <Typography variant="subtitle1">
                        <Mobile size={14} />
                        {item.uid ? item.random_number : item.text}
                      </Typography>
                      <Typography color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {item.status === 1 ? (
                          <>
                            <Verify size={14} />
                            {'Verified'}
                          </>
                        ) : item.status === 2 ? (
                          <>
                            <Copy color="gray" size={14} />
                            <p style={{ color: "gray", margin: "0px" }}>     {'Duplicate'}</p>
                          </>
                        ) : item.status === 4 ? (
                          <>
                            <Copy color="gray" size={14} />
                            <p style={{ color: "gray", margin: "0px" }}>     {'Duplicate'}</p>
                          </>
                        ) : (
                          <div style={{ display: "flex", justifyContent: "center" }}>

                            <Copy color="red" size={14} />
                            <p style={{ margin: "0px", marginLeft: "5px", color: "red" }}>Fake</p>
                          </div>

                        )}
                      </Typography>
                    </Stack>
                  }
                >
                  <Box style={listItemBoxStyle} sx={{ display: "flex" }}>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        type="outlined"
                        color="secondary"
                        sx={{ color: 'secondary.darker', borderColor: 'secondary.light', fontWeight: 600 }}
                      >
                        {item.uid ? "Qr" : "sms"}

                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography variant="subtitle1">{item.company_name}</Typography>}
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {item.response}
                        </Typography>
                      }
                    />
                  </Box>
                </ListItem>
              ))}
          </List>
        </TabPanel>}
        {allowedPermissions.includes('sms-report') && <TabPanel value={value} index={1}>
          <Spin spinning={loading}>
            <List disablePadding sx={{ '& .MuiListItem-root': { px: 3, py: 1.5 } }}>
              {allcount && allcount?.getSMSTransaction?.length !== 0 ? (
                allcount?.getSMSTransaction?.map((item, key) => (
                  <ListItem
                    key={key}
                    divider
                    secondaryAction={
                      <Stack spacing={0.25} alignItems="flex-end">
                        <Typography variant="subtitle1">
                          <Mobile size={14} />
                          {item.text}
                        </Typography>
                        <Typography color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {item.status === 1 ? (
                            <>
                              <Verify size={14} />
                              {'Verified'}
                            </>
                          ) : item.status === 2 ? (
                            <>
                              <Copy color="gray" size={14} />
                              <p style={{ color: "gray", margin: "0px" }}>  {'Duplicate'}</p>
                            </>
                          ) : item.status === 4 ? (
                            <>
                              <Copy color="gray" size={14} />
                              <p style={{ color: "gray", margin: "0px" }}> {'Duplicate'}</p>
                            </>
                          ) : (
                            <Copy color="red" size={14} />
                          )}
                        </Typography>
                      </Stack>
                    }
                  >
                    <Box sx={{ display: "flex" }}>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          type="outlined"
                          color="secondary"
                          sx={{ color: 'secondary.darker', borderColor: 'secondary.light', fontWeight: 600 }}
                        >
                          sms
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">{item.company_name}</Typography>}
                        secondary={
                          <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
                            <Typography variant="caption" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                              {item.response}
                            </Typography>
                          </div>
                        }
                      />
                    </Box>
                  </ListItem>
                ))
              ) : (
                <Typography>Data not found</Typography>
              )}

            </List>
          </Spin>
        </TabPanel>}
        {allowedPermissions.includes('qr-report') && <TabPanel value={value} index={2}>
          <Spin spinning={loading}>
            <List disablePadding sx={{ '& .MuiListItem-root': { px: 3, py: 1.5 } }}>
              {allcount &&
                allcount?.getQRTransaction?.length !== 0 &&
                allcount?.getQRTransaction?.map((item, key) => (
                  <ListItem
                    key={key}
                    divider
                    secondaryAction={
                      <Stack spacing={0.25} alignItems="flex-end">
                        <Typography variant="subtitle1">
                          <Mobile size={14} />
                          {item.random_number}
                        </Typography>
                        <Typography color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {item.status === 1 ? (
                            <>
                              <Verify size={14} />
                              {'Verified'}
                            </>
                          ) : item.status === 2 ? (
                            <>
                              <Copy color="gray" size={14} />
                              <p style={{ color: "gray", margin: "0px" }}>{'Duplicate'}</p>
                            </>
                          ) : item.status === 4 ? (
                            <>
                              <Copy color="gray" size={14} />
                              <p style={{ color: "gray", margin: "0px" }}>  {'Duplicate'}</p>
                            </>
                          ) : (
                            <Copy color="red" size={14} />
                          )}
                        </Typography>
                      </Stack>
                    }
                  >
                    <Box sx={{ display: "flex" }}>

                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          type="outlined"
                          color="secondary"
                          sx={{ color: 'secondary.darker', borderColor: 'secondary.light', fontWeight: 600 }}
                        >
                          QR
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">{item.company_name}</Typography>}
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {item.response}
                          </Typography>
                        }
                      />
                    </Box>
                  </ListItem>
                ))}
            </List>
          </Spin>
        </TabPanel>}
      </Box>
    </MainCard>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Transactions);
