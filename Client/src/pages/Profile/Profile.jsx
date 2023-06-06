import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout/Layout"
import UserQRButton from '../../components/UserQRButton/UserQRButton';
{/*         <div className="flex flex-col justify-center h-full items-center ">
          <h1 className="text-5xl font-bold text-indigo-500">Perfil</h1>

          <div className="flex flex-col justify-start mt-14">
            <h1 className="text-2xl font-bold text-black">Nombre</h1>
            <h2 className="text-xl font-regular text-blueGray-400">
              Samuel Adonay Ortíz Carballo
            </h2>
            <h1 className="text-2xl font-bold text-black mt-4">Usuario</h1>
            <h2 className="text-xl font-regular text-blueGray-400">SamCar96</h2>
            <h1 className="text-2xl font-bold text-black mt-4">
              Correo electrónico
            </h1>
            <h2 className="text-xl font-regular text-blueGray-400">
              adonayortiz96@gmail.com
            </h2>
          </div>
          <div className="flex justify-center items-cente space-x-6 mt-20 ">
            <button onClick={() => navigate('/change_password')}
              className="btn bg-indigo-500 hover:bg-indigo-600  active:bg-indigo-700 focus:outline-none focus:ring focus:ringindigo-300 
          text-white font-bold font-sans ui-sans-serif  py-2 px-4 "
            >
              Cambiar contraseña
            </button>
            <UserQRButton />
          </div>
        </div>
 */}

export default function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <Layout >
        <div className="card lg:card-side bg-base-100 shadow-xl my-auto ">
          <figure><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80" alt="Album" className='h-96 w-96' /></figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-indigo-500">Perfil de usuario</h2>
            <h3 className=" font-bold text-black mt-5">Nombre</h3>
            <p className=" font-regular text-blueGray-400">
              Samuel Adonay Ortíz Carballo
            </p>
            <h2 className=" font-bold text-black">
              Correo electrónico
            </h2>
            <p className=" font-regular text-blueGray-400">
              adonayortiz96@gmail.com
            </p>
            <div className="card-actions justify-start xs:justify-end mt-2">
              <button onClick={() => navigate('/change_password')}
                className="btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ringindigo-300 
          text-white"
              >
                Cambiar contraseña
              </button>
              <UserQRButton />
            </div>
          </div>

        </div>
      </Layout>

    </>
  );
}
