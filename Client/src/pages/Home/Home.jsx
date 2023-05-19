
import EventCard from "../../components/EventCard/EventCard"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"


function Home() {
 
    return (
        <Layout>
          <div className="w-full h-2/3 flex justify-between p-10">
            <div className="p-36 w-2/4">
              <h1 className="text-5xl font-bold ">EventMate</h1>
              <h2 className="text-3xl mt-7">Mas que una experiencia, una vergota, conectate con el mundo</h2>
            </div>
            <figure className='relative m-3 w-90 h-full w-2/4'>
              <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
            </figure>
          </div>
          <h1 className="text-5xl font-bold text-main mb-10">Eventos</h1>
          <SearchBar/>
          <div className="grid grid-cols-4 gap-16 my-5">
          <EventCard/>
          <EventCard/>
          <EventCard/>
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
  
  export default Home
  