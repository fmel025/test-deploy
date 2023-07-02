import { useNavigate } from 'react-router-dom';

function AddressAndDate({ formData, setFormData }) {

    const navigate = useNavigate();

    return (
        <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
            <div className='flex flex-wrap justify-evenly item gap-2 mt-2'>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text text-md font-bold'>Direccion:</span>
                    </label>
                    <input
                        className='input input-sm input-bordered bg-slate-200'
                        placeholder='Calle El Bambino, Antigua Guatemala'
                        value={formData.eventAddress}
                        onChange={(e) => setFormData({ ...formData, eventAddress: e.target.value })} />
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
                <div className='form-control w-36'>
                    <label className='label'>
                        <span className='label-text text-md font-bold '>Duracion:</span>
                    </label>
                    <input type='text' className='input input-sm input-bordered bg-slate-200' placeholder='1:30 horas' />
                </div>
            </div>
            <div className='mt-10 join'>
                <button onClick={() => navigate('/private/event/details/id')}
                    className='btn btn-sm btn-success join-item'>Crear evento</button>
                <button onClick={() => navigate('/private/event/details/id')}
                    className='btn btn-sm btn-error join-item'>Cancelar</button>
            </div>
        </div>
    )
}

export default AddressAndDate