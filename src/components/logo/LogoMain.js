// material-ui
import logo from 'assets/images/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = () => {
  
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="icon logo" width="100" />
     *
     */

      <img src={logo} alt="icon logo" width="150" />

  );
};

export default LogoMain;
