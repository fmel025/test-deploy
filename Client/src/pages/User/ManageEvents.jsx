import AddButton from "../../components/Buttons/AddButton"
import EmployeeEventCard from "../../components/Cards/EmployeeEventCard"
import Layout from "../../components/Navigation/Layout/Layout"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"


function ManageEvents() {

  return (
    <>
      <Layout>
      <div className="w-full flex flex-col items-center md:flex-row md:justify-center my-5 gap-1 md:gap-3 md:items-start md:pb-3">
        <SearchBar/>
        <AddButton/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-5 ">
        <EmployeeEventCard />
        <EmployeeEventCard />
        <EmployeeEventCard />
        <EmployeeEventCard />
        <EmployeeEventCard />
        <EmployeeEventCard />
        <EmployeeEventCard />
      </div>
      </Layout>
      <ImprovedNavbar/>
    </>
  )
}

export default ManageEvents
