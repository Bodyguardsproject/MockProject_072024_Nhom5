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
  WorkSchedulePage,
} from "../pages/public";

<<<<<<< HEAD
import { AdminHome ,} from "../pages/private";
import { CustomerTemplate} from "../pages/customer"
import {CreateAcount} from "../components/ComponentAdmin/index";
import BodyGuardsCustomerPage from "../pages/public/BodyGuardsCustomer";
import CustomerQuote from "../pages/customer/CustomerQuote";
=======
import { AdminHome } from "../pages/private";
import { CreateAcount } from "../components/ComponentAdmin/index";
import BodyGuardsCustomerPage from "../pages/public/BodyGuardsCustomer";
import StaffProfile from "../pages/private/Staff/StaffProfile";
import { BodyGuardsProfileTemplate } from "../components/templates";
import WorkSchedule from "../pages/private/Supervisor/WorkSchedule";
import { TimekeepingTemplate } from "../components/templates/TimekeepingTemplate";
import TimeKeeping from "../pages/private/Supervisor/TimeKeeping";
import DayOffRequest from "../pages/private/Supervisor/DayOffRequest";
>>>>>>> ff1f264d3f3fa01ea27aa371a8e9c607137276fe
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
        path: PATH.BODYGUARD_WORKSCHEDULE,
        element: <WorkSchedulePage />,
      },
      {
        path: PATH.BODYGUARD_TIME,
        element: <TimekeepingTemplate />,
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
        path: PATH.PROFILE_STAFF,
        element: <StaffProfile />,
      },
      {
        path: PATH.PROFILE_BODYGUARD,
        element: <BodyGuardsProfileTemplate />,
      },
    ],
  },
  {
    path: "/supervisor",
    element: <CustomerLayout />,
    children: [
      {
        path: PATH.SUPERVISOR_WORKSCHEDULE,
        element: <WorkSchedule />,
      },
      {
        path: PATH.SUPERVISOR_TIMEKEEPING,
        element: <TimeKeeping />,
      },
      {
        path: PATH.SUPERVISOR_DAYOFFREQUEST,
        element: <DayOffRequest />,
      },
    ],
  },

  {
    path: "/customer",
    element: <CustomerTemplate />,
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
        path: PATH.CUSTOMERQUOTE,
        element: <CustomerQuote />,
      },
    ],  
  },
];
