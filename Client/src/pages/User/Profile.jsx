import { useNavigate } from "react-router-dom";

import Layout from "../../components/Navigation/Layout/Layout";
import UserQRButton from "../../components/Buttons/UserQRButton";
import { useAuth } from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const { isPasswordSet } = useAuth();

  const { data: user, isLoading, error } = useFetch("/user/profile");

  return (
    <>
      <Layout>
        <div className="card lg:card-side bg-base-100 shadow-xl my-auto mx-10">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80"
              alt="Album"
              className="h-96 w-96 hidden lg:block"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-indigo-500">
              Perfil de usuario
            </h2>
            <h3 className=" font-bold text-black mt-5">Nombre</h3>
            <p className=" font-regular text-blueGray-400">
            {isLoading ? "Cargando..." : user.fullName}
            </p>
            <h2 className=" font-bold text-black">Correo electrónico</h2>
            <p className=" font-regular text-blueGray-400">
            {isLoading ? "Cargando..." : user.email}
            </p>
            <div className="card-actions justify-start xs:justify-end mt-2">
              <button
                onClick={() => isPasswordSet ? navigate("/user/password") : navigate("/user/setpassword")}
                className="btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ringindigo-300 
          text-white"
              >
                {isPasswordSet ? "Cambiar contraseña" : "Establecer contraseña"}
              </button>
              <UserQRButton />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
