import { useRoutes } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTES RENDER ||============================== //

export default function ThemeRoutes() {
  let user = localStorage.getItem("token");
  return useRoutes([user && user !== "" && user !== null ? MainRoutes : ComponentsRoutes]);
}
