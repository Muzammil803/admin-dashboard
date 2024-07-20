import React, { useState } from "react";
import {
  Button,
  Grid,
  OutlinedInput,
  Stack,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ForgetPassword } from "store/action/index";
import { dispatch } from "store/index";
import CompleteBackImage from "assets/images/Completeback.png";

const AuthForget = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = async () => {
    try {
      setIsValidEmail(validateEmail(email));
      if (isValidEmail) {
        setLoading(true);
        dispatch(
          ForgetPassword({
            email: email,
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
                <div>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      marginBottom: "10px",
                      width: "100%",
                      fontSize: "25px",
                    }}
                  >
                    Forget Password
                  </Typography>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
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
                      <div style={{ marginTop: 10 }}>
                        <Button
                          onClick={handleSubmit}
                          disableElevation
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            "Forget Password"
                          )}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AuthForget;
