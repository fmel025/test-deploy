
import FutureEventCard from "../../components/FutureEventCard/FutureEventCard"
import Layout from "../../components/Layout/Layout"


function FutureEvents() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mb-10">Eventos futuros</h1>
          <div className="grid grid-cols-3 gap-16 mb-5 ">
          <FutureEventCard/>
          <FutureEventCard/>
          <FutureEventCard/>
          <FutureEventCard/>
          <FutureEventCard/>
          <FutureEventCard/>
          <FutureEventCard/>
          </div>
          
        </Layout>
    )
  }
  
  export default FutureEvents
  