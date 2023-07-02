import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AssistedEvents from "./pages/Events/AttendedEvents";
import FutureEvents from "./pages/Events/FutureEvents";
import EventDetails from "./pages/Events/EventDetails";
import EmployeeEventDetails from "./pages/Events/EmployeeEventDetails";
import PurchaseTicket from "./pages/Misc/PurchaseTicket";
import Transactions from "./pages/Misc/Transactions";
import Profile from "./pages/User/Profile";
import ClientNavbar from "./components/Navigation/Navbar/ImprovedNavbar";
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
import PrivateRoute from "./utils/PrivateRoute";
import AuthProvider from "../src/context/AuthContext";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/private/home" element={<EmployeeHome />} />
    <Route path="/scanner" element={<QRScanner />} />
    <Route path="/event/attended" element={<AssistedEvents />} />
    <Route path="/event/future" element={<FutureEvents />} />
    <Route path="/event/details/id" element={<EventDetails />} />
    <Route
      path="/private/event/details/id"
      element={<EmployeeEventDetails />}
    />
    <Route
      path="/event/statistics"
      element={
        <PrivateRoute roles={["WORKER"]}>
          <EventStatisticsSelection />
        </PrivateRoute>
      }
    />
    <Route path="/event/statistics/id" element={<EventStatistics />} />
    <Route path="/event/manage" element={<ManageEvents />} />
    <Route path="/event/details/id/purchase/id" element={<PurchaseTicket />} />
    <Route path="/purchase" element={<PurchaseList />} />
    <Route path="/purchase/id" element={<OrderDetails />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/manage/users" element={<ManageUsers />} />
    <Route path="/manage/scanners" element={<ManageScanners />} />
    <Route path="/manage/auth" element={<ManageAuthorizations />} />
    <Route path="/user/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
    <Route path="/user/setpassword" element={<ChangePassword />} />
    <Route path="/transaction" element={<Transaction />} />
    <Route path="/transaction/id" element={<TransactionDetails />} />
    <Route path="/event/create" element={<CreateEventForm />} />
    <Route path="/edit/event/id" element={<EditEvent />} />
    <Route path="/edit/categories/id" element={<EditCategoriesForm />} />
    <Route path="/edit/organizers/id" element={<EditOrganizersForm />} />
    <Route path="/edit/tiers/id" element={<EditTiersForm />} />
    <Route path="/edit/sponsors/id" element={<EditSponsorsForm />} />
  </Routes>
);

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
