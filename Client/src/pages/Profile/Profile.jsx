export default function Profile() {
  return (
    <>
      <div className=" h-screen w-screen bg-gray-200">
        

        <div className="flex flex-col justify-center items-center mt-16">
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
        </div>
        <div className="flex justify-center  space-x-6 mt-36 ">
          <button
            className="bg-indigo-500 hover:bg-indigo-600  active:bg-indigo-700 focus:outline-none focus:ring focus:ringindigo-300 
       text-white font-bold font-sans ui-sans-serif  py-2 px-4 rounded"
          >
            Cambiar contraseña
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600  active:bg-indigo-700 focus:outline-none focus:ring focus:ringindigo-300 
       text-white font-bold font-sans ui-sans-serif  py-2 px-4 rounded"
          >
            Generar código
          </button>
        </div>
      </div>
    </>
  );
}
