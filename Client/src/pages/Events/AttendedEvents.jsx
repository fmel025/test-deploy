
import CompletedEventCard from "../../components/Cards/CompletedEventCard"
import Layout from "../../components/Navigation/Layout/Layout"
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"


function AttendedEvents() {

  return (
    <>
      <Layout>
        <h1 className="text-2xl lg:text-5xl font-bold text-main mb-5 text-center">Eventos asistidos</h1>
        <div className="w-full flex justify-center gap-5 mb-10">
          <div className="join gap-1">
            <button className="btn btn-sm btn-primary join-item"> Prev </button>
            <button className="btn btn-sm btn-primary join-item"> Next </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 pb-5">
          <CompletedEventCard />
          <CompletedEventCard />
          <CompletedEventCard />
          <CompletedEventCard />
          <CompletedEventCard />
          <CompletedEventCard />
        </div>
      </Layout>
      <EmployeeNavbar />
    </>
  )
}

export default AttendedEvents
