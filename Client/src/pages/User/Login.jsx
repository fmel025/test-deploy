import Layout from "../../components/Navigation/Layout/Layout";
import { UimGoogle } from "@iconscout/react-unicons-monochrome";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/google.svg";
import LoginImage from "../../assets/login.jpg";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {

  const responseMessage = (response) => {
      console.log(response);
      navigate("/");
  };
  const errorMessage = (error) => {
      console.log(error);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmitGoogle = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-3xl md:text-4xl font-bold">Iniciar sesion</span>
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
            />
          </div>
          <div className="py-4">
            <label htmlFor="password" className="mb-2 text-md">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>

          <button
            className="w-full text-sm bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            type="button"
            onClick={handleSubmit}
          >
            Iniciar sesion
          </button>

          <div className="py-4 flex items-center justify-center">
            <div className="border-t border-gray-300 w-1/3"></div>
            <div className="mx-3 text-gray-500">O</div>
            <div className="border-t border-gray-300 w-1/3"></div>
          </div>

          <div className="flex items-center justify-center">
            <GoogleLogin className="w-full" onSuccess={responseMessage} onError={errorMessage} />

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
    </div>
  );
}

export default Login;
