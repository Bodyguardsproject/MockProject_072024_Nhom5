import { AuthLayout, CustomerLayout } from "../components/layouts";
import { PATH } from "../constant";
import {
  Home,
  Services,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  AboutUs,
  Jobspage,
} from "../pages/public";

import { AdminHome ,} from "../pages/private";
import {CreateAcount} from "../components/ComponentAdmin/index"
import BodyGuardsCustomerPage from "../pages/public/BodyGuardsCustomer";
export const router = [
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.BODYGUARDS,
        element: <BodyGuardsCustomerPage />,
      },
      {
        path: PATH.SERVICES,
        element: <Services />,
      },
      {
        path: PATH.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: PATH.JOBS,
        element: <Jobspage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
      {
        path: PATH.REGISTER,
        element: <Register />,
      },
      {
        path: PATH.FORGOTPASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: PATH.RESETPASSWORD,
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,

   
  },
];
