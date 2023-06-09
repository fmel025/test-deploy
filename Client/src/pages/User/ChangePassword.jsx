import React from 'react'
import Layout from '../../components/Navigation/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import ImprovedNavbar from '../../components/Navigation/Navbar/ImprovedNavbar';

function ChangePassword() {

  {/* <div className="rounded w-3/5 md:w-3/5 lg:w-2/5 flex-col justify-center p-10 mt-40 bg-white">
          <h1 className='font-semibold text-3xl text-center mb-10'>Cambiar contraseña</h1>
          <p className='font-semibold'>Nueva Contraseña:</p>
          <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
          <p className='font-semibold'>Confirmar contraseña:</p>
          <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
          <div className='flex flex-row justify-center items-center my-5 gap-5 md:gap-14 lg:gap-28'>
            <button className='btn bg-main hover:bg-darker-main text-white font-bold' onClick={() => navigate('/profile')}>Confirmar</button>
            <button className='btn btn-secondary bg-red-500 hover:bg-red-700 text-white font-bold ' onClick={() => navigate('/profile')}>Cancelar</button>
          </div>
        </div> */}

  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className='card bg-white my-auto'>
          <div className='card-body'>
            <h1 className='card-title'>Cambiar contraseña</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Cambiar contraseña</span>
              </label>
              <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
              <label className='label'>
                <span className='label-text'>Cambiar contraseña</span>
              </label>
              <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
            </div>
            <div className='card-actions'>
              <button className='btn bg-main hover:bg-darker-main text-white font-bold' onClick={() => navigate('/profile')}>Confirmar</button>
              <button className='btn btn-secondary bg-red-500 hover:bg-red-700 text-white font-bold ' onClick={() => navigate('/profile')}>Cancelar</button>
            </div>
          </div>

        </div>
      </Layout>
      <ImprovedNavbar />
    </>
  )
}

export default ChangePassword