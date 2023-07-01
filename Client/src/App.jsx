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
import CreateEvent from "./pages/Events/CreateEvent";
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
    { path: "/", element: <Home /> },
    { path: "/home", element: <EmployeeHome /> },
    { path: "/scanner", element: <QRScanner /> },
    { path: "/attendedevents", element: <AssistedEvents /> },
    { path: "/futureevents", element: <FutureEvents /> },
    { path: "/eventdetails", element: <EventDetails /> },
    { path: "/employeeeventdetails", element: <EmployeeEventDetails /> },
    {
      path: "/eventstatisticsselection",
      element: <EventStatisticsSelection />,
    },
    { path: "/eventstatistics", element: <EventStatistics /> },
    { path: "/manageevents", element: <ManageEvents /> },
    { path: "/purchaseticket", element: <PurchaseTicket /> },
    { path: "/purchaselist", element: <PurchaseList /> },
    { path: "/orderdetails", element: <OrderDetails /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/manageusers", element: <ManageUsers /> },
    { path: "/managescanners", element: <ManageScanners /> },
    { path: "/manageauthorizations", element: <ManageAuthorizations /> },
    { path: "/profile", element: <Profile /> },
    { path: "/login", element: <Login /> },
    { path: "/changepassword", element: <ChangePassword /> },
    { path: "/transaction", element: <Transaction /> },
    { path: "/transactiondetails", element: <TransactionDetails /> },
    { path: "/createevent", element: <CreateEventForm /> },
    { path: "/editevent", element: <EditEvent /> },
    { path: "/createnewevent", element: <CreateEventForm /> },
    { path: "/editcategories", element: <EditCategoriesForm /> },
    { path: "/editorganizers", element: <EditOrganizersForm /> },
    { path: "/edittiers", element: <EditTiersForm /> },
    { path: "/editsponsors", element: <EditSponsorsForm /> },
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
