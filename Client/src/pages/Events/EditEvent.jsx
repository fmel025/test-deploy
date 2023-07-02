import Layout from '../../components/Navigation/Layout/Layout'
import { UilTimes } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';
import { IconCrosshair , IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"


function EditEvent() {

    const navigate = useNavigate();
    return (
        <>
            <Layout>
                <div className="rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 my-auto bg-white">
                    <h1 className='font-semibold text-3xl text-center mb-10'>Editar evento</h1>
                    <p className='font-semibold'>Nombre del evento:</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Nombre del evento'></input>
                    <p className='font-semibold mt-5'>Descripcion del evento :</p>
                    <input type='text' className='textarea textarea-bordered textarea-sm bg-slate-200 w-full' placeholder='Descripcion del evento'></input>
                    <p className='font-semibold mt-5'>Organizadores:</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Organizadores'></input>
                    <div className="flex flex-wrap mt-2">
                        <div className="badge">Organizador 1 <UilTimes /></div>
                        <div className="badge">Organizador 2 <UilTimes /></div>
                    </div>
                    <p className='font-semibold mt-5'>Categorias</p>
                    <input type='text' className='input input-bordered input-sm bg-slate-200 w-full' placeholder='Categorias'></input>
                    <div className="flex flex-wrap mt-5">
                        <div className="badge">Categoria 1 <UilTimes /></div>
                        <div className="badge">Categoria 3 <UilTimes /></div>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-2 mt-5'>
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
                    <div className='btn btn-sm text-slate-200 bg-main hover:bg-darker-main mt-5'><IconCrosshair className='mr-2' /> Agregar localidad</div>
                    <div className="flex flex-wrap mt-2">
                        <div className="badge">Localidad 1 <UilTimes /></div>
                        <div className="badge">Localidad 2 <UilTimes /></div>
                    </div>

                    <p className='font-semibold mt-5'>Lugar del evento:</p>
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
                    <div className='flex flex-wrap justify-start items-center my-5 gap-2'>
                        <button onClick={() => navigate('/private/event/details/id')}
                            className='btn btn-md text-slate-200 bg-main hover:bg-darker-main'> <IconCircleCheck className='mr-2' /> Guardar cambios</button>
                        <button onClick={() => navigate('/private/event/details/id')}
                            className='btn btn-secondary text-slate-200'> <IconCircleX className='mr-2' /> Cancelar</button>
                    </div>
                </div>
            </Layout>
            <EmployeeNavbar />
        </>
    )
}

export default EditEvent