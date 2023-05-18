import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import AssistedEvents from '../AttendedEvents/AttendedEvents'
import FutureEvents from '../FutureEvents/FutureEvents'
import EventDetails from '../EventDetails/EventDetails'
import ImprovedNavbar from '../../components/Navbar/ImprovedNavbar'

const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/attended_events', element: <AssistedEvents /> },
      { path: '/future_events', element: <FutureEvents /> },
      { path: '/event_details', element: <EventDetails /> },
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
