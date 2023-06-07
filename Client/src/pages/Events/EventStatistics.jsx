
import { IconInfoHexagon } from "@tabler/icons-react"
import EventStatsTable from "../../components/Tables/Table/EventStatsTable"
import Layout from "../../components/Navigation/Layout/Layout"
import StatisticsChart from "../../components/Cards/Charts/StatisticsChart"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"



function EventStatistics() {
 
    return (
        <>
        <Layout>
        <h1 className="text-2xl font-bold mt-3 ">Titulo del evento</h1>
        <p className="font-light text-gray-500">Fecha</p>
          <div className="bg-white flex flex-col lg:flex-row items-center gap-1 h-auto w-10/12 rounded-lg shadow-lg p-8 m-3 ">
             <EventStatsTable/>
             <span className="alert alert-info lg:hidden w-5/6 m-5 text-sm">
              <IconInfoHexagon className="text-sm"/>
              Haga scroll horizontal sobre la tabla para mostrar toda la informacion
            </span>
             <StatisticsChart/>
          </div>
        </Layout>
        <ImprovedNavbar/>
        </>
    )
  }
  
  export default EventStatistics