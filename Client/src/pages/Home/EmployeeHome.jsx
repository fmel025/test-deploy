
import Layout from "../../components/Navigation/Layout/Layout"
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"

function EmployeeHome() {

  return (
    <>
      <Layout>
        <div className="w-screen flex flex-col lg:flex-row justify-between items-center p-10 my-auto">
          <div className="w-4/5 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">EventMate</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-2">Mas que un evento, es una experiencia, conectate con el mundo</h2>
          </div>
          <figure className='relative m-3 w-90 h-full md:w-2/4 w-4/5'>
            <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
          </figure>
        </div>
      </Layout>
      <EmployeeNavbar />
    </>
  )
}

export default EmployeeHome
