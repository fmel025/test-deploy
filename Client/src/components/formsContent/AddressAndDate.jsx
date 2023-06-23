import React from 'react'

function AddressAndDate() {
  return (
    <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
            <div className='flex flex-wrap justify-evenly item gap-2 mt-2'>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text text-md font-bold'>Direccion:</span>
                    </label>
                    <input className='input input-sm input-bordered bg-slate-200' placeholder='Calle El Bambino, Antigua Guatemala' />
                </div>
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold'>Fecha:</span>
                    </label>
                    <input type='date' className='input input-sm input-bordered bg-slate-200' placeholder='' />
                </div>
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold '>Hora:</span>
                    </label>
                    <input type='time' className='input input-sm input-bordered bg-slate-200' placeholder='' />
                </div>
                <button className='btn btn-sm btn-wide mt-2'>Añadir localidad</button>
            </div>
        </div>
  )
}

export default AddressAndDate