import { useState } from "react";
import { Link } from "react-router-dom";

// material-ui
import {
  Button,

  // FormHelperText,
  Grid,
  // Link,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// // third-party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// project-imports
import IconButton from "components/@extended/IconButton";
import AnimateButton from "components/@extended/AnimateButton";
import CircularProgress from "@mui/material/CircularProgress";

// assets
import { Eye, EyeSlash } from "iconsax-react";
import { fetchLoginUser } from "store/action/index";
import { dispatch } from "store/index";

// ============================|| JWT - LOGIN ||============================ //

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  // Password validation function
  const validatePassword = (inputPassword) => {
    // At least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^.+$/;
    return passwordRegex.test(inputPassword);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Check if the entered password is valid
    setIsValidPassword(validatePassword(inputPassword));
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Check if the entered email is valid
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async () => {
    try {
      setIsValidEmail(validateEmail(email));
      setIsValidPassword(validatePassword(password));

      if (isValidPassword && isValidEmail) {
        setLoading(true);
        dispatch(
          fetchLoginUser({
            email: email,
            password: password,
            setLoading: setLoading,
          })
        );
      }

      // Handle form submission here

      // setLoading(false); // Stop loading
    } catch (err) {
      console.error(err);
      setLoading(false); // Stop loading in case of an error
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            {/* <InputLabel htmlFor="email-login">Email Address</InputLabel> */}
            <OutlinedInput
              onChange={handleEmailChange}
              id="email-login"
              type="email"
              name="email"
              placeholder="Enter email address"
              fullWidth
              required
            />
            {!isValidEmail && (
              <p style={{ color: "red" }}>
                Please enter a valid email address.
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
              placeholder="Enter password"
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
              <p style={{ color: "red" }}>Please enter Password</p>
            )}
          </Stack>
        </Grid>

        {/* <Grid item xs={12}> */}
        {/* {errors.submit && (
              <FormHelperText error>{errors.submit}</FormHelperText>
            )} */}
        {/* </Grid> */}

        {/* <div style={{ marginTop: 18, textAlign: "end", width: "100%" }}>
          <Typography
            component={Link}
            to="/forget-password"
            variant="body1"
            sx={{ textDecoration: "none" }}
            color="primary"
          >
            Forgot Password?
          </Typography>
        </div> */}

<Grid item xs={12} >
            <div style={{ marginTop: 1 }}>
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
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                </Button>
              </AnimateButton>
            </div>
          </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div>
    <a
      href="https://www.sitelock.com/verify.php?site=etibarwins.com"
      onClick={(e) => {
        window.open(
          'https://www.sitelock.com/verify.php?site=etibarwins.com',
          'SiteLock',
          'width=600,height=600,left=160,top=170'
        );
        e.preventDefault(); // Prevent the default behavior of the anchor tag
      }}
    >
      <img
        className="img-fluid"
        alt="SiteLock"
        title="SiteLock"
        src="https://shield.sitelock.com/shield/etibarwins.com"
      />
    </a>
  </div> */}
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLogin;
