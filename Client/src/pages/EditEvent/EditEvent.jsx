import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UilTimes } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';


function EditEvent() {
    
 const navigate = useNavigate();
  return (
    <Layout>
        <div className="rounded w-2/4 flex-col justify-center p-10 mt-32 mb-14 bg-white">
            <h1 className='font-semibold text-3xl text-center mb-10'>Editar evento</h1>
            <p className='font-semibold'>Nombre del evento:</p>
            <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Nombre del evento'></input>
            <p className='font-semibold'>Descripcion del evento:</p>
            <input type='text' className='textarea textarea-bordered textarea-sm bg-slate-200 w-full' placeholder='Descripcion del evento'></input>
            <p className='font-semibold'>Organizadores:</p>
            <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Organizadores'></input>
            {/* make a row of chips of the organizers*/}
            <div className="flex space-x-2 mt-2">
                <div className="badge">Organizador 1 <UilTimes/></div>
                <div className="badge">Organizador 2 <UilTimes/></div>
            </div>
            <p className='font-semibold'>Categorias</p>
            <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Categorias'></input>
            {/* make a row of chips of the categories*/}
            <div className="flex space-x-2 mt-2">
                <div className="badge">Categoria 1 <UilTimes/></div>
                <div className="badge">Categoria 3 <UilTimes/></div>
            </div>
            <div className='flex flex-row justify-center items-center my-5 gap-10'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Localidad:</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Localidad'></input>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Precio:</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Precio'></input>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Cantidad de asientos:</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Localidad'></input>
                </div>
            </div>
            <div className='btn btn-sm bg-main hover:bg-darker-main'>Agregar localidad</div>
            <div className="flex space-x-2 mt-2">
                <div className="badge">Localidad 1 <UilTimes/></div>
                <div className="badge">Localidad 2 <UilTimes/></div>
            </div>
            
            <p className='font-semibold'>Lugar del evento:</p>
            <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Lugar del evento'></input>
            <div className='flex flex-row justify-between items-center my-5'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Hora:</p>
                    <input type='time' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Hora'></input>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Fecha:</p>
                    <input type='date' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Precio'></input>
                </div>
            </div>
            <div className='flex flex-row justify-start items-center my-5 gap-10'>
                <button onClick={() => navigate('/employee_event_details')}
                className='btn btn-md bg-main hover:bg-darker-main'>Guardar cambios</button>
                <button  onClick={() => navigate('/employee_event_details')}
                className='btn btn-secondary'>Cancelar</button>
            </div>

        </div>
    </Layout>
  )
}

export default EditEvent