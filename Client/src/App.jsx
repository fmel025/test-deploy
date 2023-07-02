import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AssistedEvents from "./pages/Events/AttendedEvents";
import FutureEvents from "./pages/Events/FutureEvents";
import EventDetails from "./pages/Events/EventDetails";
import EmployeeEventDetails from "./pages/Events/EmployeeEventDetails";
import PurchaseTicket from "./pages/Misc/PurchaseTicket";
import Transactions from "./pages/Misc/Transactions";
import Profile from "./pages/User/Profile";
import ImprovedNavbar from "./components/Navigation/Navbar/ImprovedNavbar";
import EmployeeHome from "./pages/Home/EmployeeHome";
import ManageEvents from "./pages/User/ManageEvents";
import EventStatistics from "./pages/Events/EventStatistics";
import EventStatisticsSelection from "./pages/Events/EventStatisticsSelection";
import Login from "./pages/User/Login";
import ChangePassword from "./pages/User/ChangePassword";
import Transaction from "./pages/Misc/Transaction";
import EditEvent from "../src/components/formsContent/EditEvent";
import ManageUsers from "./pages/User/ManageUsers";
import ManageScanners from "./pages/User/ManageScanners";
import ManageAuthorizations from "./pages/User/ManageAuthorizations";
import PurchaseList from "./pages/User/PurchaseList";
import OrderDetails from "./pages/Misc/OrderDetails";
import TransactionDetails from "./pages/Misc/TransactionDetails";
import CreateEventForm from "./pages/Events/CreateEventForm";
import EditCategoriesForm from "./components/formsContent/editEvent/EditCategoriesForm";
import EditOrganizersForm from "./components/formsContent/editEvent/EditOrganizersForm";
import EditTiersForm from "./components/formsContent/editEvent/EditTiersForm";
import QRScanner from "./pages/Misc/QRScanner";
import EditSponsorsForm from "./components/formsContent/editEvent/EditSponsorsForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

import AuthProvider from "../src/context/AuthContext";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/private/home", element: <EmployeeHome /> },
    { path: "/scanner", element: <QRScanner /> },
    { path: "/event/attended", element: <AssistedEvents /> },
    { path: "/event/future", element: <FutureEvents /> },
    /* Here goes one with params */
    { path: "/event/details/id", element: <EventDetails /> },
    /* Any suggestions? */
    { path: "/private/event/details/id", element: <EmployeeEventDetails /> },
    {
      path: "/event/statistics",
      element: <EventStatisticsSelection />,
    },
    /* Here goes one with params too, A.K.A with id */
    { path: "/event/statistics/id", element: <EventStatistics /> },
    { path: "/event/manage", element: <ManageEvents /> },
    { path: "/event/details/id/purchase/id", element: <PurchaseTicket /> },
    { path: "/purchase", element: <PurchaseList /> },
    { path: "/purchase/id", element: <OrderDetails /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/manage/users", element: <ManageUsers /> },
    { path: "/manage/scanners", element: <ManageScanners /> },
    { path: "/manage/auth", element: <ManageAuthorizations /> },
    { path: "/user/profile", element: <Profile /> },
    { path: "/login", element: <Login /> },
    { path: "/user/setpassword", element: <ChangePassword /> },
    { path: "/transaction", element: <Transaction /> },
    { path: "/transaction/id", element: <TransactionDetails /> },
    { path: "/event/create", element: <CreateEventForm /> },
    { path: "/edit/event/id", element: <EditEvent /> },
    { path: "/edit/categories/id", element: <EditCategoriesForm /> },
    { path: "/edit/organizers/id", element: <EditOrganizersForm /> },
    { path: "/edit/tiers/id", element: <EditTiersForm /> },
    { path: "/edit/sponsors/id", element: <EditSponsorsForm /> },
  ]);
  return routes;
};

function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="988130177374-4rhnbeevlas2772hvnuasoq8fjgqlcbp.apps.googleusercontent.com">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
