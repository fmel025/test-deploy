import React from 'react'
import { IconTrash } from '@tabler/icons-react'
import Layout from '../../Navigation/Layout/Layout'
import ImprovedNavbar from '../../Navigation/Navbar/ImprovedNavbar'
import { useNavigate } from 'react-router-dom'


function EditCategoriesForm() {

    const navigate = useNavigate();

    const [organizerValue, setOrganizerValue] = React.useState('')
    const [organizers, setOrganizers] = React.useState([]);

    const handleOrganizerChange = (e) => {
        setOrganizerValue(e.target.value);
    }

    const addOrganizer = () => {
        if (organizerValue.trim() === '') return;
        setOrganizers((prevOrganizer) => [
            ...prevOrganizer,
            organizerValue.trim(),
        ]);
        setOrganizerValue('');
    }

    const removeOrganizer = (organizerToRemove) => {
        setOrganizers((prevOrganizers) =>
            prevOrganizers.filter((organizer) => organizer !== organizerToRemove)
        );
    };

    return (
        <Layout>
            <div className=''>
                <div className='flex flex-col items-start bg-white p-10 rounded'>
                    <label className='label'>
                        <span className='label-text text-xl text-center font-bold'>Editar organizadores</span>
                    </label>
                    <div className="join join-vertical md:join-horizontal w-full">
                        <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
                            placeholder="Categoria"
                            value={organizerValue}
                            onChange={handleOrganizerChange} />
                        <button
                            className="btn btn-sm join-item md:btn-wide"
                            onClick={addOrganizer}>Añadir Organizador</button>
                    </div>
                    <div className="mt-2 gap-2 flex flex-col items-start">
                        {organizers.map((category) => (
                            <div key={category} className="border bg-slate-100 flex w-48 md:w-72 join">
                                <p className='w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item'>{category}</p>
                                <button
                                    className="btn btn-sm btn-square btn-error join-item"
                                    onClick={() => removeOrganizer(category)}
                                >
                                    <IconTrash className='my-auto text-white text-sm' />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='join mt-5'>
                        <button className='btn btn-primary join-item font-bold'
                        onClick={() => navigate('/employeeeventdetails')}>
                            Guardar
                        </button>
                        <button className='btn btn-secondary join-item font-bold'
                        onClick={() => navigate('/employeeeventdetails')}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <ImprovedNavbar />
        </Layout>
    )
}

export default EditCategoriesForm