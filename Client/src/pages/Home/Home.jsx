import EventCard from "../../components/Cards/EventCard"
import Layout from "../../components/Navigation/Layout/Layout"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"
import ClientNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"

function Home() {

  return (
    <>
      <Layout>
        <div className="w-screen flex flex-col lg:flex-row justify-between items-center p-10 mb-5">
          <div className="w-4/5 text-center mb-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">EventMate</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-7">Mas que un evento, es una experiencia, conectate con el mundo</h2>
          </div>
          <figure className='relative m-3 w-90 h-full md:w-2/4 w-4/5'>
            <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
          </figure>
        </div>
        <h1 className="text-5xl font-bold text-main mb-10">Eventos</h1>
        <div className="w-full flex justify-center gap-5">
          <SearchBar />
          <div className="join gap-1">
            <button className="btn btn-sm btn-primary join-item"> Prev </button>
            <button className="btn btn-sm btn-primary join-item"> Next </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 my-5">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </Layout>
      <ClientNavbar />
    </>
  )
}

export default Home
