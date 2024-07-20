import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import CommonLayout from 'layout/CommonLayout';
import AuthForget from 'sections/auth/auth-forms/AuthForget';
import AuthOTP from 'sections/auth/auth-forms/AuthOTP';

const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthComponent = Loadable(lazy(() => import('pages/auth/AuthComponent')));
// const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));


// ==============================|| COMPONENTS ROUTES ||============================== //

const ComponentsRoutes = {
  path: '*',
  element: <CommonLayout />,
  children: [
    {
      path: '*',  
      element: <AuthLogin  />
    },
    // {
    //   path: 'forget-password',
    //   element: <AuthComponent name="Forget Password" component={<AuthForget />} />
    // },
    {
      path: 'forget-password',  
      element: <AuthForget  />
    },
    {
      path: 'otp-password',  
      element: <AuthOTP  />
    },
    // {
    //   path: 'otp-password',
    //   element: <AuthComponent name="Change Password" component={<AuthOTP />} />
    // }
    // ,
    // {
    //   path: 'register',
    //   element: <AuthRegister />
    // }
  ]
}

export default ComponentsRoutes;
