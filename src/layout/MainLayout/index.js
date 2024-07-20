import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Box, Container, Toolbar } from "@mui/material";

// project-imports
import Drawer from "./Drawer";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "components/@extended/Breadcrumbs";

import navigation from "menu-items";
import { dispatch, useSelector } from "store";
import { openDrawer } from "store/reducers/menu";
import { DRAWER_WIDTH } from "config";
import { AES, enc } from "crypto-js";
import * as url from "../../store/constant/Endpoints";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("xl"));
  const { drawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     document.title = document.visibilityState === 'visible'
  //       ? 'E-Paisa Changer'
  //       : 'Come back soon! You’re missed.';
  //   };
  //   document.addEventListener('visibilitychange', handleVisibilityChange);
  //   return () => {
  //     document.removeEventListener('visibilitychange', handleVisibilityChange);
  //   };
  // }, []);

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
      localStorage.clear();
      window.location.reload();
    }
  }

  const permissionsAssrray =
    decryptedData && JSON.parse(decryptedData)?.user_type;

  //  useEffect(() => {
  //   if (permissionsAssrray === "bank_user") {
  //     setTimeout(() => {
  //       window.location.href = "/payments/all-payments";
  //     }, 1000);
  //   }
  // }, []); // empty dependency array for running the effect only once


  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Toolbar sx={{ mt: "inherit" }} />
        <Container
          sx={{
            position: "relative",
            minHeight: "calc(100vh - 110px)",
            display: "flex",
            flexDirection: "column",
            maxWidth: "2000px !important",
          }}
        >
          <Breadcrumbs navigation={navigation} title />
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
