
import CompletedEventCard from "../../components/CompletedEventCard/CompletedEventCard"
import Layout from "../../components/Layout/Layout"
import ImprovedNavbar from "../../components/Navbar/ImprovedNavbar"


function AttendedEvents() {
 
    return (
      <>
      <Layout>
      <h1 className="text-5xl font-bold text-main mb-10">Eventos asistidos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 pb-5">
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      </div>
      </Layout>
      <ImprovedNavbar/>
    </>
    )
  }
  
  export default AttendedEvents
  