
import Layout from "../../components/Navigation/Layout/Layout"
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"

function EmployeeHome() {
 
    return (
        <>
        <Layout>
        <div className="w-full h-full flex items-center justify-between mb-5">
            <div className="p-36 w-2/4">
              <h1 className="text-5xl font-bold ">EventMate</h1>
              <h2 className="text-3xl mt-7">Mas que un evento, es una experiencia, conectate con el mundo</h2>
            </div>
            <figure className='relative m-3 w-90 h-full w-2/4'>
              <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
            </figure>
          </div>
        </Layout>
          <EmployeeNavbar/>
        </>
    )
  }
  
  export default EmployeeHome
  