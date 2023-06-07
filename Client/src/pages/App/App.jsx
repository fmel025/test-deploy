import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import AssistedEvents from '../AttendedEvents/AttendedEvents'
import FutureEvents from '../FutureEvents/FutureEvents'
import EventDetails from '../EventDetails/EventDetails'
import EmployeeEventDetails from '../EventDetails/EmployeeEventDetails'
import PurchaseTicket from '../PurchaseTicket/PurchaseTicket'
import Transactions from '../Transactions/Transactions'
import Profile from '../Profile/Profile'
import ImprovedNavbar from '../../components/Navbar/ImprovedNavbar'
import EmployeeHome from '../Home/EmployeeHome'
import ManageEvents from '../ManageEvents/ManageEvents'
import EventStatistics from '../EventStatistics/EventStatistics'
import EventStatisticsSelection from '../EventStatisticsSelection/EventStatisticsSelection'
import Login from '../Login/Login'
import ChangePassword from '../ChangePassword/ChangePassword'
import Transaction from '../Transaction/Transaction'
import CreateEvent from '../CreateEvent/CreateEvent'
import EditEvent from '../EditEvent/EditEvent'
import ManageUsers from '../ManageUsers/ManageUsers'
import ManageScanners from '../ManageScanners/ManageScanners'
import ManageAuthorizations from '../ManageAuthorizations/ManageAuthorizations'
import EmployeeNavbar from '../../components/Navbar/EmployeeNavbar'
import PurchaseList from '../PurchaseList/PurchaseList'
import OrderDetails from '../OrderDetails/OrderDetails'
import TransactionDetails from '../TransactionDetails/TransactionDetails'

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
