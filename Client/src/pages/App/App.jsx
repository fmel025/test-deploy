import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import AssistedEvents from '../AttendedEvents/AttendedEvents'
import FutureEvents from '../FutureEvents/FutureEvents'
import EventDetails from '../EventDetails/EventDetails'
import PurchaseTicket from '../PurchaseTicket/PurchaseTicket'
import Transactions from '../Transactions/Transactions'
import AllTickets from '../AllTickets/AllTickets'
import Profile from '../Profile/Profile'
import ImprovedNavbar from '../../components/Navbar/ImprovedNavbar'
import Login from '../Login/Login'
import ChangePassword from '../ChangePassword/ChangePassword'
import Transaction from '../Transaction/Transaction'

const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/attended_events', element: <AssistedEvents /> },
      { path: '/future_events', element: <FutureEvents /> },
      { path: '/event_details', element: <EventDetails /> },
      { path: '/purchase_ticket', element: <PurchaseTicket /> },
      { path: '/transactions', element: <Transactions /> },
      { path: '/all_tickets', element: <AllTickets /> },
      {path: '/profile',element: <Profile/>},
      { path: '/login', element: <Login/>},
      {path: '/change_password',element: <ChangePassword/>},
      { path: '/transaction', element: <Transaction />}
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
