
import EventCard from "../../components/EventCard/EventCard"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"


function EventStatisticsSelection() {
 
    return (
        <Layout>
          <SearchBar />
          <div className="grid grid-cols-3 gap-16 mb-5 ">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          </div>
          
        </Layout>
    )
  }
  
  export default EventStatisticsSelection
  