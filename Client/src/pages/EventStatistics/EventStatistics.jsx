
import EventStatsTable from "../../components/EventStatsTable/EventStatsTable"
import Layout from "../../components/Layout/Layout"
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart"


function EventStatistics() {
 
    return (
        <Layout>
        
        <h1 className="text-2xl font-bold mt-3 ">Titulo del evento</h1>
        <p className="font-light text-gray-500">Fecha</p>
          <div className="bg-white flex gap-1 h-auto w-10/12 rounded-lg shadow-lg p-8 m-3 ">
             <EventStatsTable/>
             <StatisticsChart/>
          </div>
          
        </Layout>
    )
  }
  
  export default EventStatistics