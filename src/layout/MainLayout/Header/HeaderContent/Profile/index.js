import PropTypes from "prop-types";
// import { KeyOutlined } from "@ant-design/icons";
// material-ui
import React, { useRef, useState, useEffect } from "react";
import PasswordInput from "components/inputs/PasswordInput";
import LockResetIcon from '@mui/icons-material/LockReset';
import {
  ChangePassword,
  REmoveFetchNotifiction,
} from "store/action/index";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { dispatch } from "store/index";
import CircularProgress from "@mui/material/CircularProgress";
import { AES, enc } from "crypto-js";
import * as url from "../../../../../store/constant/Endpoints";
import { connect } from "react-redux";

// project-imports
import Avatar from "components/@extended/Avatar";
import MainCard from "components/MainCard";
import Transitions from "components/@extended/Transitions";
import { Button, Modal, Space, Input, Dropdown, Badge, Menu } from "antd";
import IconButton from "components/@extended/IconButton";
import USerViewNotifiationMdoal from "./notitificationdetailmofal";
// assets
import avatar1 from "assets/images/users/avatar-6.png";
import { Logout } from "iconsax-react";
import { BellOutlined } from "@ant-design/icons";

// tab panel wrapper
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
      sx={{ p: 1 }}
    >
      {value === index && children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const ProfilePage = ({ notificationData }) => {
  const theme = useTheme();

  // let loginDetailsLocalStorage = localStorage.getItem("LoginData");
  // let loginDetails = JSON.parse(loginDetailsLocalStorage);
  const handleLogout = async () => {
    // Logout
    localStorage.clear();
    window.location.reload();
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [current_password, setcurrentPasssword] = useState("");
  const [password, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [validation, setValidation] = useState(false);
  // let userId = localStorage.getItem('Id');

  const [fieldErrors, setFieldErrors] = useState({
    current_password: "",
    password: "",
    confirmPassword: "",
    password: false,
    password_error_text: "",
    current_password_error_text: "",
    confirmPassword: false,
    c_password_error_text: "",
  });

  let permissionUser = localStorage.getItem("data");

  let decryptedData = null;
  if (permissionUser) {
    try {
      // Code that may throw an exception
      decryptedData = AES.decrypt(
        permissionUser,
        url.encryptionSecret
      ).toString(enc.Utf8);
      // ...
    } catch (error) {
      console.log(error, "er");
    }
  }

  const loginDetails = JSON.parse(decryptedData);

  // console.log(loginDetails.image);
  const [userobj, setUserObj] = useState({
    current_password: "",
    password: "",
    confirmPassword: "",
  });

  const setPasswordValidation = (value, newPass, confirmNewPass) => {
    const newFieldErrors = { ...fieldErrors };

    if (value === "newPass") {
      if (newPass.length < 6) {
        newFieldErrors.password = true;
        newFieldErrors.password_error_text =
          "Password must be at least 6 characters";
      } else {
        newFieldErrors.password = false;
        newFieldErrors.password_error_text = "";
      }
    } else if (value === "confirmNewPass") {
      // Check password and confirm password match
      if (password !== confirmNewPass) {
        newFieldErrors.confirmPassword = true;
        newFieldErrors.c_password_error_text = "Password does not match";
      } else {
        newFieldErrors.confirmPassword = false;
        newFieldErrors.c_password_error_text = "";
      }
    } else {
      if (password.length < 6) {
        newFieldErrors.password = true;
        newFieldErrors.password_error_text =
          "Password must be at least 6 characters";
      } else {
        newFieldErrors.password = false;
        newFieldErrors.password_error_text = "";
      }

      // Check password and confirm password match
      if (password !== confirmPassword) {
        newFieldErrors.confirmPassword = true;
        newFieldErrors.c_password_error_text = "Password does not match";
      } else {
        newFieldErrors.confirmPassword = false;
        newFieldErrors.c_password_error_text = "";
      }
    }

    setFieldErrors(newFieldErrors);
  };

  const handleBlur = () => {
    setPasswordValidation();
  };

  const handleOk = () => {
    setLoading(true);
    setValidation(true);
    setPasswordValidation();
    const requiredFields = ["current_password", "password"];

    const newFieldErrors = { ...fieldErrors };

    // Check each required field
    requiredFields &&
      requiredFields.length !== 0 &&
      requiredFields.forEach((fieldName) => {
        if (!userobj[fieldName]) {
          newFieldErrors[fieldName] = `${fieldName} is required`;
        } else {
          newFieldErrors[fieldName] = "";
        }
      });

    setFieldErrors(newFieldErrors);

    if (password.length >= 6 && password != confirmPassword) {
      setModalOpen(false);
    }

    const hasErrors = Object.values(newFieldErrors).some(
      (error) => error !== ""
    );

    if (!newFieldErrors?.confirmPassword) {
      dispatch(
        ChangePassword({
          current_password: current_password,
          password: password,
          setModalOpen: setModalOpen,
          setLoading: setLoading,
        })
      );
      //   setModalOpen(false);
    }
  };
  const handleCancel = () => {
    setModalOpen(false);
  };


  useEffect(() => {
    // console.log("nenenenen", notificationData?.notificationData?.data?.count);
  }, [notificationData]);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userAgainData, setUserAgain] = useState();
  const [notificationModalView, setNotiModalView] = useState(false);

  const handleChange = () => {
    setModalOpen(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: "First",
    },
    {
      key: "2",
      label: "Second",
    },
    {
      key: "3",
      label: "Third",
    },
  ];




  if (permissionUser) {
    try {
      // Code that may throw an exception
      decryptedData = AES.decrypt(
        permissionUser,
        url.encryptionSecret
      ).toString(enc.Utf8);
      // ...
    } catch (error) {
      localStorage.clear();
      window.location.reload();
    }
  }

  const permissionsAssrray =
    decryptedData && JSON.parse(decryptedData)?.user_type;

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <div style={{ display: "flex" }}>


        <ButtonBase
          sx={{
            p: 0.25,
            borderRadius: 1,
            bgcolor: "secondary.lighter",
            "&:hover": { bgcolor: "secondary.lighter" },
            "&:focus-visible": {
              outline: `2px solid ${theme.palette.secondary.dark}`,
              outlineOffset: 2,
            },
          }}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? "profile-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar
            style={{ padding: 4 }}
            alt="profile user"
            src={
              loginDetails?.image !== null && loginDetails?.image !== ""
                ? loginDetails?.image
                : avatar1
            }
          />
          {/* <Avatar alt="profile user" src={avatar1} /> */}
        </ButtonBase>
      </div>

      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            type="grow"
            position="top-right"
            in={open}
            {...TransitionProps}
          >
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                width: 290,
                minWidth: 240,
                maxWidth: 290,
                [theme.breakpoints.down("md")]: {
                  maxWidth: 250,
                },
                borderRadius: 1.5,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard sx={{ border: "none" }} content={false}>
                  <CardContent sx={{ px: 2.5, pt: 3 }}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Stack
                          direction="row"
                          spacing={1.25}
                          alignItems="center"
                        >
                          <Avatar
                            style={{ padding: 4 }}
                            alt="profile user"
                            src={
                              loginDetails?.image !== null &&
                                loginDetails?.image !== ""
                                ? loginDetails?.image
                                : avatar1
                            }
                          />
                          <Stack>
                            <Typography variant="subtitle1">
                              {loginDetails?.name !== null &&
                                loginDetails?.name !== ""
                                ? loginDetails?.name
                                : "No Name"}
                            </Typography>
                            <Typography variant="body2" color="secondary">
                              {loginDetails?.email !== null &&
                                loginDetails?.email !== ""
                                ? loginDetails?.email
                                : "No Email"}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>

                      <Grid item>
                        <Tooltip title="Logout">
                          <IconButton
                            size="large"
                            color="error"
                            sx={{ p: 1 }}
                            onClick={handleLogout}
                          >
                            <Logout variant="Bulk" />
                          </IconButton>
                        </Tooltip>
                      </Grid>

                      <Grid item>
                        <Tooltip title="Change Password">
                          <IconButton size="large" color="error" sx={{ p: 1 }} onClick={handleChange}>
                            <LockResetIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Space>
                        <Modal
                          open={isModalOpen}
                          title="Change Password"
                          onOk={handleOk}
                          onCancel={handleCancel}
                          // footer={(_, { OkBtn, CancelBtn }) => (
                          //   <><CancelBtn /><OkBtn /></>
                          // )}
                          footer={[
                            <Button key="back" onClick={handleCancel}>
                              Cancel
                            </Button>,
                            <Button
                              key="submit"
                              style={{ backgroundColor: "#1677ff" }}
                              type="primary"
                              onClick={handleOk}
                            >
                              {loading ? (
                                <CircularProgress size={14} color="inherit" />
                              ) : (
                                "Change Password"
                              )}
                            </Button>,
                          ]}
                        >
                          <br />

                          {/* Modal content */}

                          <div className="my-2">
                            <PasswordInput
                              value={current_password}
                              onBlur={handleBlur}
                              onChange={(e) =>
                                setcurrentPasssword(e.target.value)
                              }
                              type="password"
                              name="Current Password*"
                              placeholder="Current Password*"
                              error={fieldErrors.current_password}
                              errorText={
                                fieldErrors.current_password_error_text
                              }
                            />
                          </div>

                          <div className="my-2">
                            <PasswordInput
                              value={password}
                              onBlur={handleBlur}
                              onChange={(e) => {
                                setnewPassword(e.target.value);
                                setPasswordValidation(
                                  "newPass",
                                  e.target.value,
                                  ""
                                );
                              }}
                              type="password"
                              name="Password*"
                              placeholder="Password*"
                              error={fieldErrors.password}
                              errorText={fieldErrors.password_error_text}
                            />
                          </div>
                          <div className="my-2">
                            <PasswordInput
                              value={confirmPassword}
                              onBlur={handleBlur}
                              name="Confirm Password*"
                              placeholder="Confirm Password"
                              onChange={(e) => {
                                setconfirmPassword(e.target.value);
                                setPasswordValidation(
                                  "confirmNewPass",
                                  "",
                                  e.target.value
                                );
                              }}
                              error={fieldErrors.confirmPassword}
                              errorText={fieldErrors.c_password_error_text}
                            />
                          </div>
                        </Modal>
                      </Space>
                    </Grid>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
      {/* <USerViewNotifiationMdoal
        notificationModalView={notificationModalView}
        setNotiModalView={setNotiModalView}
        handleCancelNoti={handleCancelNoti}
        userAgainData={userAgainData}
      /> */}
    </Box >
  );
};

const mapStateToProps = (state) => {
  return {
    notificationData: state?.Notificationgetall,
  };
};

export default connect(mapStateToProps)(ProfilePage);
