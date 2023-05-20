
import EventStatsTable from "../../components/EventStatsTable/EventStatsTable"
import Layout from "../../components/Layout/Layout"


function EventStatistics() {
 
    return (
        <Layout>
          <div className="bg-white flex flex-col gap-1 h-auto w-10/12 rounded-lg shadow-lg p-8 m-10 ">
            <h1 className="text-2xl font-bold ">Titulo del evento</h1>
            <p className="font-light text-gray-500">Fecha</p>

             <EventStatsTable/>
          </div>
          
        </Layout>
    )
  }
  
  export default EventStatistics