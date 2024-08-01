import { CustomerLayout } from "../components/layouts";
import { PATH } from "../constant";
import { Home, Services } from "../pages/public";
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
    ],
  },
  // {
  //   path: "/auth",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: PATH.LOGIN,
  //       element: <Login />,
  //     },
  //     {
  //       path: PATH.register,
  //       element: <Register />,
  //     },
  //   ],
  // },
];
