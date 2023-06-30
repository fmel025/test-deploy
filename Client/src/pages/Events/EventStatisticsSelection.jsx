
import Layout from "../../components/Navigation/Layout/Layout"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"
import StatsCard from "../../components/Cards/StatsCard"
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"


function EventStatisticsSelection() {

  return (
    <>
      <Layout>
        <div className="w-full flex justify-center gap-5">
          <SearchBar />
          <div className="join gap-1">
            <button className="btn btn-sm btn-primary join-item"> Prev </button>
            <button className="btn btn-sm btn-primary join-item"> Next </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-5 ">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </Layout>
      <EmployeeNavbar />
    </>
  )
}

export default EventStatisticsSelection
