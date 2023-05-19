import React from 'react'
import Layout from '../../components/Layout/Layout'

function ChangePassword() {
  return (
    <Layout>
        <div className="rounded w-2/5 flex-col justify-center p-10 mt-60  bg-white">
        <p className='font-semibold'>Nueva Contraseña:</p>
        <input type='password' className='rounded-md border-2 border-gray-300 w-full p-2 my-2 bg-slate-200' placeholder='********'></input>
        <p className='font-semibold'>Confirmar contraseña:</p>
        <input type='password' className='rounded-md border-2 border-gray-300 w-full p-2 my-2 bg-slate-200' placeholder='********'></input>
        <div className='flex flex-row justify-center items-center my-5 gap-32'>
            <button className='rounded-md border-2 border-gray-300 w-2/3 p-2 my-2 bg-main text-white font-semibold'>Confirmar</button>
            <button className='rounded-md border-2 border-gray-300 w-2/3 p-2 my-2 bg-rose-600 text-white font-semibold'>Cancelar</button>
        </div>
    </div>
    </Layout>
  )
}

export default ChangePassword