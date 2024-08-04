import { CustomerLayout } from "../components/layouts";
import { PATH } from "../constant";
import { Home, Services } from "../pages/public";
import { AdminHome ,} from "../pages/private";
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
  {
    path: "/admin",
    element: <AdminHome />,
    
  },
 
];
