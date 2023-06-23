import React from 'react'


function LocationAdAvailability() {
    return (
        <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
            <div className='flex flex-wrap justify-center item gap-2 mt-2'>
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold'>Localidad:</span>
                    </label>
                    <input className='input input-sm input-bordered bg-slate-200' placeholder='VIP' />
                </div>
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold'>Precio:</span>
                    </label>
                    <input className='input input-sm input-bordered bg-slate-200' placeholder='$000.00' />
                </div>
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold '>Asientos:</span>
                    </label>
                    <input className='input input-sm input-bordered bg-slate-200' placeholder='***' />
                </div>
                <button className='btn btn-sm btn-wide mt-2'>Añadir localidad</button>
            </div>
        </div>
    )
}

export default LocationAdAvailability