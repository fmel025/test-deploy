import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import AssistedEvents from '../AttendedEvents/AttendedEvents'
import FutureEvents from '../FutureEvents/FutureEvents'
import EventDetails from '../EventDetails/EventDetails'
import EmployeeEventDetails from '../EventDetails/EmployeeEventDetails'
import PurchaseTicket from '../PurchaseTicket/PurchaseTicket'
import Transactions from '../Transactions/Transactions'
import AllTickets from '../AllTickets/AllTickets'
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

const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/Home', element: <EmployeeHome /> },
      { path: '/attended_events', element: <AssistedEvents /> },
      { path: '/future_events', element: <FutureEvents /> },
      { path: '/event_details', element: <EventDetails /> },
      { path: '/employee_event_details', element: <EmployeeEventDetails /> },
      { path: '/event_statistics_selection', element: <EventStatisticsSelection /> },
      { path: '/event_statistics', element: <EventStatistics /> },
      { path: '/manage_events', element: <ManageEvents /> },
      { path: '/purchase_ticket', element: <PurchaseTicket /> },
      { path: '/transactions', element: <Transactions /> },
      { path: '/all_tickets', element: <AllTickets /> },
      { path: '/manage_users', element: <ManageUsers /> },
      { path: '/manage_scanners', element: <ManageScanners /> },
      { path: '/manage_authorizations', element: <ManageAuthorizations /> },
      {path: '/profile',element: <Profile/>},
      { path: '/login', element: <Login/>},
      {path: '/change_password',element: <ChangePassword/>},
      { path: '/transaction', element: <Transaction />},
      { path: '/create_event', element: <CreateEvent />},
      { path: '/edit_event', element: <EditEvent />}
    ]
    )
    return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <ImprovedNavbar />
    </BrowserRouter>
  )
}

export default App
