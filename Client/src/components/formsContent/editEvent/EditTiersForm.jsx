import { useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Navigation/Layout/Layout'
import ImprovedNavbar from '../../Navigation/Navbar/ImprovedNavbar';

function EditTiersForm() {

    const navigate = useNavigate();

    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState({
        eventLocation: '',
        eventPrice: '',
        eventSeats: '',
    });

    const addLocation = () => {
        if (
            formData.eventLocation.trim() === '' ||
            formData.eventPrice.trim() === '' ||
            formData.eventSeats.trim() === ''
        )
            return;

        const newLocation = {
            eventLocation: formData.eventLocation.trim(),
            eventPrice: formData.eventPrice.trim(),
            eventSeats: formData.eventSeats.trim(),
        };

        setLocations((prevLocations) => [...prevLocations, newLocation]);

        setFormData((prevFormData) => ({
            ...prevFormData,
            eventLocation: '',
            eventPrice: '',
            eventSeats: '',
        }));
    };

    const removeLocation = (locationToRemove) => {
        setLocations((prevLocations) =>
            prevLocations.filter((location) => location !== locationToRemove)
        );
    };

    return (
        <Layout>
            <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
            <h1 className='text-xl font-bold text-center'>Editar localidades</h1>
                <div className="flex flex-wrap justify-center item gap-2 mt-2">
                    <div className="form-control w-36">
                        <label className="label">
                            <span className="label-text text-md font-bold">Localidad:</span>
                        </label>
                        <input
                            className="input input-sm input-bordered bg-slate-200"
                            placeholder="VIP"
                            value={formData.eventLocation}
                            onChange={(e) =>
                                setFormData({ ...formData, eventLocation: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-control w-36">
                        <label className="label">
                            <span className="label-text text-md font-bold">Precio:</span>
                        </label>
                        <input
                            className="input input-sm input-bordered bg-slate-200"
                            placeholder="$000.00"
                            value={formData.eventPrice}
                            onChange={(e) =>
                                setFormData({ ...formData, eventPrice: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-control w-36">
                        <label className="label">
                            <span className="label-text text-md font-bold ">Asientos:</span>
                        </label>
                        <input
                            className="input input-sm input-bordered bg-slate-200"
                            placeholder="***"
                            value={formData.eventSeats}
                            onChange={(e) =>
                                setFormData({ ...formData, eventSeats: e.target.value })
                            }
                        />
                    </div>
                    <button className="btn btn-sm w-10/12 mt-2" onClick={addLocation}>
                        Añadir localidad
                    </button>
                    <div className="mt-2 gap-2 flex flex-col items-start">
                        {locations?.map((location, index) => (
                            <div key={index} className="border bg-slate-100 flex w-50 md:w-72 join">
                                <p className='w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item'>{location.eventLocation} - ${location.eventPrice} -{' '}
                                    {location.eventSeats} asientos </p>
                                <button
                                    className="my-auto text-white text-sm btn btn-sm btn-square btn-error join-item"
                                    onClick={() => removeLocation(location)}
                                >
                                    <IconTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='join mt-5'>
                        <button className='btn btn-primary join-item'
                        onClick={() => navigate('/employeeeventdetails')}>
                            Guardar
                        </button>
                        <button className='btn btn-secondary join-item'
                        onClick={() => navigate('/employeeeventdetails')}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <ImprovedNavbar />
        </Layout>

    );
}

export default EditTiersForm;
