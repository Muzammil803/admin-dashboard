// material-ui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// import BG_SA from 'assets/images/bg/BG_SA.png';
import BG_SA from 'assets/images/Back.png';
import CompleteBackImage from 'assets/images/Completeback.png'
// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  // const theme = useTheme();

  return (
    
    <Box
      sx={{
        position: 'absolute',
        // zIndex: -1,
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        overflow: 'hidden',
        backgroundImage: `url(${CompleteBackImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
   
      }}
    >
 
    
    </Box>
  );
};

export default AuthBackground;
