import Layout from "../../components/Navigation/Layout/Layout";
import { UimGoogle } from "@iconscout/react-unicons-monochrome";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/google.svg";
import LoginImage from "../../assets/login.jpg";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../hooks/useAuth";
import toast, { Toaster } from 'react-hot-toast';


function Login() {
  const { setAuthToken, setAuthPermissions, setAuthPasswordSet } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const errorToast = (message) => toast.error(message);

  const handleRedirect = (permissions = []) => {

    if (permissions.includes("WORKER")) {
      return navigate("/private/home");
    }

    navigate("/");
  }

  const responseMessage = (response) => {
    const decoded = jwt_decode(response.credential);

    axios
      .post("/auth/google", {
        fullname: decoded.name,
        email: decoded.email,
      })
      .then((response) => {
        setAuthToken(response.data.token);
        setAuthPermissions(response.data.authorities);
        setAuthPasswordSet(response.data.isPasswordSet);
        handleRedirect(response.data.authorities);
      })
      .catch((error) => {
        errorToast("Internal server error")
      });
  };

  const errorMessage = (error) => {
    errorToast("Error al iniciar sesion con Google");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      identifier: email,
      password: password,
    };

    axios
      .post("/auth/login", data)
      .then((response) => {
        setAuthToken(response.data.token);
        handleRedirect(response.data.authorities);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          errorToast("Aun no tienes contraseña, inicia sesion con Google");
          return;
        }

        if (error.response.status === 404 || error.response.status === 401) {
          errorToast("Usuario o contraseña incorrectos");
          return;
        }

        errorToast("Internal server error");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form
          className="flex flex-col justify-center p-8 md:p-14"
          onSubmit={handleSubmit}
        >
          <span className="mb-3 text-3xl md:text-4xl font-bold">
            Iniciar sesion
          </span>
          <span className="font-light text-gray-400 mb-4">
            Bienvenido de nuevo a EventMate
          </span>
          <div className="py-4">
            <label htmlFor="email" className="mb-2 text-md">
              Email o Username
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="py-4">
            <label htmlFor="password" className="mb-2 text-md">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              minLength={8}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full text-sm bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            type="submit"
          >
            Iniciar sesion
          </button>

          <div className="py-4 flex items-center justify-center">
            <div className="border-t border-gray-300 w-1/3"></div>
            <div className="mx-3 text-gray-500">O</div>
            <div className="border-t border-gray-300 w-1/3"></div>
          </div>

          <div className="flex items-center justify-center">
            <GoogleLogin
              className="w-full"
              onSuccess={responseMessage}
              onError={errorMessage}
            />
          </div>
        </form>

        <div className="relative">
          <img
            src={LoginImage}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default Login;
