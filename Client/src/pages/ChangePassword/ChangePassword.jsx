import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import ImprovedNavbar from '../../components/Navbar/ImprovedNavbar';

function ChangePassword() {

  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className="rounded w-3/5 md:w-3/5 lg:w-2/5 flex-col justify-center p-10 mt-40 bg-white">
          <h1 className='font-semibold text-3xl text-center mb-10'>Cambiar contraseña</h1>
          <p className='font-semibold'>Nueva Contraseña:</p>
          <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
          <p className='font-semibold'>Confirmar contraseña:</p>
          <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
          <div className='flex flex-row justify-center items-center my-5 gap-5 md:gap-14 lg:gap-28'>
            <button className='btn bg-main' onClick={() => navigate('/profile')}>Confirmar</button>
            <button className='btn btn-secondary ' onClick={() => navigate('/profile')}>Cancelar</button>
          </div>
        </div>
      </Layout>
      <ImprovedNavbar />
    </>
  )
}

export default ChangePassword