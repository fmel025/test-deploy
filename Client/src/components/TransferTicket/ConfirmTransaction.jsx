import React from 'react'
import Layout from '../Layout/Layout'

function ConfirmTransaction() {
  return (
    <Layout>
        <div className='flex flex-col w-full h-full mt-64 px-28 text-center items-center'>
                <h1 className='font-semibold text-5xl mb-10 px-10'>Confirmar transaccion</h1>
                {/* Aca se puede manejar mediante props el mensaje de confirmacion */}
                {/* <h1 className='text=5xl'> Transaccion exitosa </h1>*/}
                <p className='font-semibold text-2xl mb-10 px-10'>Ingrese el codigo que se ha enviado a su correo:</p>
                <div className='flex flex-col justify-center items-center my-5 gap-32'>
                    <input type='text' className='input-bordered input bg-slate-200 w-full' placeholder='Codigo de usuario'></input>
                    <button className='btn bg-main'>Confirmar</button>
                </div>
            </div>
        
    </Layout>
  )
}

export default ConfirmTransaction 