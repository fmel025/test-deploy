import AddButton from "../../components/AddButton/AddButton"
import EventCard from "../../components/EventCard/EventCard"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"


function ManageEvents() {
 
    return (
        <Layout>
            <div className="w-full flex justify-center my-5 gap-5">
                <SearchBar />
                <AddButton />
            </div>
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
  
  export default ManageEvents
  