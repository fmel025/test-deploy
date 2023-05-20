
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"
import StatsCard from "../../components/StatsCard/StatsCard"


function EventStatisticsSelection() {
 
    return (
        <Layout>
          <SearchBar />
          <div className="grid grid-cols-3 gap-16 mb-5 ">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          </div>
          
        </Layout>
    )
  }
  
  export default EventStatisticsSelection
  