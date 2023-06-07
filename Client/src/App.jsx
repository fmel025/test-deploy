import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import AssistedEvents from './pages/AttendedEvents/AttendedEvents'
import FutureEvents from './pages/FutureEvents/FutureEvents'
import EventDetails from './pages/EventDetails/EventDetails'
import EmployeeEventDetails from './pages/EventDetails/EmployeeEventDetails'
import PurchaseTicket from './pages/PurchaseTicket/PurchaseTicket'
import Transactions from './pages/Transactions/Transactions'
import Profile from './pages/Profile/Profile'
import ImprovedNavbar from './components/Navigation/Navbar/ImprovedNavbar'
import EmployeeHome from './pages/Home/EmployeeHome'
import ManageEvents from './pages/ManageEvents/ManageEvents'
import EventStatistics from './pages/EventStatistics/EventStatistics'
import EventStatisticsSelection from './pages/EventStatisticsSelection/EventStatisticsSelection'
import Login from './pages/Login/Login'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Transaction from './pages/Transaction/Transaction'
import CreateEvent from './pages/CreateEvent/CreateEvent'
import EditEvent from './pages/EditEvent/EditEvent'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import ManageScanners from './pages/ManageScanners/ManageScanners'
import ManageAuthorizations from './pages/ManageAuthorizations/ManageAuthorizations'
import PurchaseList from './pages/PurchaseList/PurchaseList'
import OrderDetails from './pages/OrderDetails/OrderDetails'
import TransactionDetails from './pages/TransactionDetails/TransactionDetails'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/home', element: <EmployeeHome /> },
    { path: '/attendedevents', element: <AssistedEvents /> },
    { path: '/futureevents', element: <FutureEvents /> },
    { path: '/eventdetails', element: <EventDetails /> },
    { path: '/employeeeventdetails', element: <EmployeeEventDetails /> },
    { path: '/eventstatisticsselection', element: <EventStatisticsSelection /> },
    { path: '/eventstatistics', element: <EventStatistics /> },
    { path: '/manageevents', element: <ManageEvents /> },
    { path: '/purchaseticket', element: <PurchaseTicket /> },
    { path: '/purchaselist', element: <PurchaseList /> },
    { path: '/orderdetails', element: <OrderDetails /> },
    { path: '/transactions', element: <Transactions /> },
    { path: '/manageusers', element: <ManageUsers /> },
    { path: '/managescanners', element: <ManageScanners /> },
    { path: '/manageauthorizations', element: <ManageAuthorizations /> },
    { path: '/profile', element: <Profile /> },
    { path: '/login', element: <Login /> },
    { path: '/changepassword', element: <ChangePassword /> },
    { path: '/transaction', element: <Transaction /> },
    { path: '/transactiondetails', element: <TransactionDetails /> },
    { path: '/createevent', element: <CreateEvent /> },
    { path: '/editevent', element: <EditEvent /> }
  ]
  )
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
