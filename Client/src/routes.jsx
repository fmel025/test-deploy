import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AssistedEvents from "./pages/Events/AttendedEvents";
import FutureEvents from "./pages/Events/FutureEvents";
import EventDetails from "./pages/Events/EventDetails";
import EmployeeEventDetails from "./pages/Events/EmployeeEventDetails";
import PurchaseTicket from "./pages/Misc/PurchaseTicket";
import Transactions from "./pages/Misc/Transactions";
import Profile from "./pages/User/Profile";
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
import PrivateRoute from "./utils/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import ClientNavbar from "./components/Navigation/Navbar/ImprovedNavbar";
import EmployeeNavbar from "./components/Navigation/Navbar/EmployeeNavbar";
import SetPassword from "./pages/User/SetPassword";
import { GlobalNavbar } from "./components/Navigation/Navbar/GlobalNavbar";

const AppRoutes = () => {

    const location = useLocation();
    // Here you insert the paths you wanna exclude

    const excludedPaths = ["/login", "/set-password"];

    return (
        <>
            {excludedPaths.includes(location.pathname) ? null : <GlobalNavbar />}
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/private/home"
                    element={
                        <PrivateRoute roles={["WORKER", "ADMIN"]}>
                            <EmployeeHome />
                        </PrivateRoute>
                    } />
                <Route
                    path="/scanner"
                    element={
                        <PrivateRoute roles={["ADMIN", "VALIDATOR"]}>
                            <QRScanner />
                        </PrivateRoute>} />

                <Route
                    path="/event/attended"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <AssistedEvents />
                        </PrivateRoute>} />
                <Route
                    path="/event/future"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <FutureEvents />
                        </PrivateRoute>} />
                {/* Leave this public */}
                <Route path="/event/details/id" element={<EventDetails />} />
                <Route
                    path="/private/event/details/id"
                    element={<EmployeeEventDetails />}
                />
                <Route
                    path="/event/statistics"
                    element={
                        <PrivateRoute roles={["ANALYST", "ADMIN"]}>
                            <EventStatisticsSelection />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/event/statistics/id"
                    element={
                        <PrivateRoute roles={["ANALYST", "ADMIN"]}>
                            <EventStatistics />
                        </PrivateRoute>
                    } />
                <Route
                    path="/event/manage"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <ManageEvents />
                        </PrivateRoute>
                    } />
                <Route
                    path="/event/details/id/purchase/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <PurchaseTicket />
                        </PrivateRoute>
                    } />
                <Route
                    path="/purchase"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <PurchaseList />
                        </PrivateRoute>
                    } />
                <Route
                    path="/purchase/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <OrderDetails />
                        </PrivateRoute>
                    } />
                <Route
                    path="/transactions"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <Transactions />
                        </PrivateRoute>
                    } />
                <Route
                    path="/manage/users"
                    element={
                        <PrivateRoute roles={["ADMIN", "MOD"]}>
                            <ManageUsers />
                        </PrivateRoute>
                    } />
                <Route
                    path="/manage/scanners"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <ManageScanners />
                        </PrivateRoute>
                    } />
                <Route
                    path="/manage/auth"
                    element={
                        <PrivateRoute roles={["ADMIN"]}>
                            <ManageAuthorizations />
                        </PrivateRoute>
                    } />
                <Route
                    path="/user/profile"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT", "WORKER"]}>
                            <Profile />
                        </PrivateRoute>
                    } />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/user/password"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT", "WORKER"]}>
                            <ChangePassword />
                        </PrivateRoute>
                    } />
                <Route
                    path="/user/setpassword"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT", "WORKER"]}>
                            <SetPassword/>
                        </PrivateRoute>
                    } />
                <Route
                    path="/transaction"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <Transaction />
                        </PrivateRoute>
                    } />
                <Route
                    path="/transaction/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "CLIENT"]}>
                            <TransactionDetails />
                        </PrivateRoute>
                    } />
                <Route
                    path="/event/create"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD", "WORKER"]}>
                            <CreateEventForm />
                        </PrivateRoute>
                    } />
                <Route
                    path="/edit/event/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <EditEvent />
                        </PrivateRoute>
                    } />
                <Route
                    path="/edit/categories/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <EditCategoriesForm />
                        </PrivateRoute>
                    } />
                <Route
                    path="/edit/organizers/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <EditOrganizersForm />
                        </PrivateRoute>
                    } />
                <Route
                    path="/edit/tiers/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <EditTiersForm />
                        </PrivateRoute>
                    } />
                <Route
                    path="/edit/sponsors/id"
                    element={
                        <PrivateRoute roles={["ADMIN", "EVENT_MOD"]}>
                            <EditSponsorsForm />
                        </PrivateRoute>
                    } />
            </Routes>
        </>
    )
};



export default AppRoutes;