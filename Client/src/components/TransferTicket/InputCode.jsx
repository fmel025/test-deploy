import React from 'react'
import Layout from '../Layout/Layout'

function InputCode() {
  return (
    <Layout>
        <div className='flex flex-col w-full h-full mt-64 px-28 text-center'>
                <h1 className='font-semibold text-5xl mb-10 px-10'>Transferir ticket</h1>
                <p className='font-semibold text-2xl mb-10 px-10'>Ingrese el codigo del usuario al que se le desea transferir:</p>
                <div className='flex flex-col justify-center items-center my-5 gap-32'>
                    <input type='text' className='rounded-md border-2 border-gray-300 w-2/5 p-2 my-2 bg-white' placeholder='Codigo de usuario'></input>
                    <button className='rounded-md border-2 border-gray-300 w-1/4 p-2 my-2 bg-main text-white font-semibold'>Transferir</button>
                </div>
            </div>
        
    </Layout>
  )
}

export default InputCode