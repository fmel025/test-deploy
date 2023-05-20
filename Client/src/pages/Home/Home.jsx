
import EventCard from "../../components/EventCard/EventCard"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"


function Home() {
 
    return (
        <Layout>
          <div className="w-screen flex flex-col lg:flex-row justify-between items-center p-10">
            <div className="w-4/5 text-center">
              <h1 className="text-5xl font-bold ">EventMate</h1>
              <h2 className="text-3xl mt-7">Mas que una experiencia, una vergota, conectate con el mundo</h2>
            </div>
            <figure className='relative m-3 w-90 h-full md:w-2/4 w-4/5'>
              <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
            </figure>
          </div>
          <h1 className="text-5xl font-bold text-main mb-10 mt-24">Eventos</h1>
          <SearchBar/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 my-5">
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
  