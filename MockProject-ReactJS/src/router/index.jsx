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
  UploadCVPage,
  WorkSchedule,
} from "../pages/public";

import { AdminHome } from "../pages/private";
import { CreateAcount } from "../components/ComponentAdmin/index";
import BodyGuardsCustomerPage from "../pages/public/BodyGuardsCustomer";
import Profile from "../pages/private/Menu/Profile/Profile";
import { BodyGuardsProfileTemplate } from "../components/templates";
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
      {
        path: PATH.UPLOADCV,
        element: <UploadCVPage />,
      },
      {
        path: PATH.WORKSCHEDULE,
        element: <WorkSchedule />,
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
  {
    path: "/user",
    element: <CustomerLayout />,
    children: [
      {
        path: PATH.PROFILE,
        element: <Profile />,
      },
      {
        path: PATH.PROFILE_BODYGUARD,
        element: <BodyGuardsProfileTemplate />,
      },
    ],
  },
];
