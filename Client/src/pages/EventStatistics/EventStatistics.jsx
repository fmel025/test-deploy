
import Layout from "../../components/Layout/Layout"
import StatsCard from "../../components/StatsCard/StatsCard"
import SearchBar from "../../components/SearchBar/SearchBar"


function EventStatistics() {
 
    return (
        <Layout>
            <SearchBar/>
          <div className="flex flex-col gap-4 mb-5  w-full items-center">
            <StatsCard />
            <StatsCard />
            <StatsCard />
          </div>
        </Layout>
    )
  }
  
  export default EventStatistics
  