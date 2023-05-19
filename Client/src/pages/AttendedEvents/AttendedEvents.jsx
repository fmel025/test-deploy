
import CompletedEventCard from "../../components/CompletedEventCard/CompletedEventCard"
import Layout from "../../components/Layout/Layout"


function AttendedEvents() {
 
    return (
      <Layout>
      <h1 className="text-5xl font-bold text-main mb-10">Eventos asistidos</h1>
      <div className="grid grid-cols-3 gap-16 pb-5">
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      <CompletedEventCard />
      </div>
      
    </Layout>
    )
  }
  
  export default AttendedEvents
  