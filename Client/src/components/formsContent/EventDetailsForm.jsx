import React from 'react'

function EventDetails() {
  return (
    <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
      <label className='label'>
        <span className='label-text text-md font-bold'>Nombre del evento:</span>
      </label>
      <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Evento'></input>
      <label className='label'>
        <span className='label-text text-md font-bold'>Descripcion del evento:</span>
      </label>
      <input type='text' className='textarea textarea-bordered textarea-sm bg-slate-200 w-full' placeholder='Descripcion detallada'></input>
      <label className='label'>
        <span className='label-text text-md font-bold'>Organizadores:</span>
      </label>
      <div className="join">
        <input className="input input-sm bg-slate-200 w-full input-bordered join-item" placeholder="Organizador" />
        <button className="btn btn-sm join-item btn-wide">Añadir organizador</button>
      </div>
      <label className='label'>
        <span className='label-text text-md font-bold'>Categorias:</span>
      </label>
      <div className="join">
        <input className="input input-sm bg-slate-200 w-full input-bordered join-item" placeholder="Categoria" />
        <button className="btn btn-sm join-item btn-wide">Añadir Categoria</button>
      </div>
    </div>
  )
}

export default EventDetails