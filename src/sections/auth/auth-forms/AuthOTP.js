import { useState } from "react";
// import { Link } from 'react-router-dom';
import { MuiOtpInput } from "mui-one-time-password-input";

// material-ui
import {
  Button,
  InputAdornment,
  OutlinedInput,
  IconButton,
  // FormHelperText,
  Grid,
  Stack,
} from "@mui/material";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import CompleteBackImage from "assets/images/Completeback.png";   
// // third-party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// project-imports
import AnimateButton from "components/@extended/AnimateButton";
import CircularProgress from "@mui/material/CircularProgress";
import { Eye, EyeSlash } from "iconsax-react";

// assets
import { VerifyOTP } from "store/action/index";
import { dispatch } from "store/index";

// ============================|| JWT - LOGIN ||============================ //

const AuthOTP = () => {
  let email = localStorage.getItem("email-forget");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isValidOTP, setIsValidOTP] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Check if the entered password is valid
    setIsValidPassword(validatePassword(inputPassword));
  };
  const handleConfirmPasswordChange = (e) => {
    const inputPassword = e.target.value;
    setConfirmPassword(inputPassword);

    // Check if the entered password is valid
    setIsValidConfirmPassword(validatePassword(inputPassword));
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const validateOTP = (inputOTP) => {
    return inputOTP.length === 6;
  };

  // Password validation function
  const validatePassword = (inputPassword) => {
    // Regular expression for password validation
    // At least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^.+$/;
    return passwordRegex.test(inputPassword);
  };
  const handleSubmit = async () => {
    try {
      setIsValidOTP(validateOTP(otp));
      setIsValidPassword(validatePassword(password));
      setIsValidConfirmPassword(validatePassword(confirmPassword));

      if (isValidOTP && isValidPassword && isValidConfirmPassword) {
        setLoading(true);
        dispatch(
          VerifyOTP({
            email: email,
            otp: otp,
            password: password,
            c_password: confirmPassword,
            setLoading: setLoading,
          })
        );
      }
    } catch (err) {
      console.error(err);
      setLoading(false); // Stop loading in case of an error
    }
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ minHeight: "100vh", display: "flex", backgroundColor: "#f9f9f9" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${CompleteBackImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            [theme.breakpoints.down("md")]: {
              display: "none", // Hide on medium screens
            },
          }}
        >
          <Container maxWidth="sm">
            <Card
              sx={{
                m: "0 auto",
                paddingTop: "10%",
                margin: "15%",
                height: "75%",
                paddingLeft: "5%",
                paddingRight: "5%",
                borderRadius: "2%",
                borderBottom: "8px solid red",
                paddingBottom: "5%",
              }}
            >
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <MuiOtpInput
                        value={otp}
                        length={6}
                        onChange={handleChange}
                        TextFieldsProps={{ placeholder: "-" }}
                      />
                      {!isValidOTP && (
                        <p style={{ color: "red" }}>
                          Please enter a valid OTP.
                        </p>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      {/* <InputLabel htmlFor="password-login">Password</InputLabel> */}
                      <OutlinedInput
                        onChange={handlePasswordChange}
                        fullWidth
                        id="password-login"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter New Password"
                        required
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              color="secondary"
                            >
                              {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {!isValidPassword && (
                        <p style={{ color: "red" }}>
                          Please Enter New Password
                        </p>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      {/* <InputLabel htmlFor="password-login">Password</InputLabel> */}
                      <OutlinedInput
                        onChange={handleConfirmPasswordChange}
                        fullWidth
                        id="password-confirm"
                        type={showConfirmPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Confirm New Password"
                        required
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              edge="end"
                              color="secondary"
                            >
                              {showConfirmPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {!isValidConfirmPassword && (
                        <p style={{ color: "red" }}>
                          Please Enter Confirm New Password
                        </p>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <div style={{ marginTop: 10 }}>
                      <AnimateButton>
                        <Button
                          onClick={handleSubmit}
                          disableElevation
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={loading} // Disable the button when loading
                        >
                          {loading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            "Change Password"
                          )}
                        </Button>
                      </AnimateButton>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AuthOTP;
