
import TierCard from "../../components/Cards/TierCard"
import Layout from "../../components/Navigation/Layout/Layout"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"


function EventDetails() {

  return (
    <>
      <Layout>
        <figure className='relative m-3 h-96 w-full'>
          <img className='object-cover w-full h-full grayscale rounded-lg' src='https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
        </figure>
        <div className="bg-white flex flex-col gap-1 h-auto w-10/12 rounded-lg shadow-lg p-8 m-10 ">
          <h1 className="text-2xl font-bold ">Titulo del evento</h1>
          <p className="font-light text-gray-500">Organizador</p>
          <p className="font-light text-gray-500">Fecha</p>
          <p className="font-bold">Categorias</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
          <p className="font-bold">Ubicacion</p>
          <p className="font-bold">Duracion</p>
          <p className="font-bold">Patrocinadores</p>
          <p className="font-bold">Cupos disponibles</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-10 ">
          <TierCard />
          <TierCard />
          <TierCard />
          <TierCard />
        </div>
      </Layout>
      <ImprovedNavbar />
    </>
  )
}

export default EventDetails
