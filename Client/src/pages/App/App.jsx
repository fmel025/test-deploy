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

const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/Home', element: <EmployeeHome /> },
      { path: '/attended_events', element: <AssistedEvents /> },
      { path: '/future_events', element: <FutureEvents /> },
      { path: '/event_details', element: <EventDetails /> },
      { path: '/employee_event_details', element: <EmployeeEventDetails /> },
      { path: '/manage_events', element: <ManageEvents /> },
      { path: '/purchase_ticket', element: <PurchaseTicket /> },
      { path: '/transactions', element: <Transactions /> },
      { path: '/all_tickets', element: <AllTickets /> },
      {path: '/profile',element: <Profile/>},
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
