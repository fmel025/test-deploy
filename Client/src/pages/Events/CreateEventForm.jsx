import { useState } from 'react'
import Layout from '../../components/Navigation/Layout/Layout';
import EventDetailsForm from '../../components/formsContent/EventDetailsForm';
import LocationAdAvailability from '../../components/formsContent/LocationAdAvailability';
import AddressAndDate from '../../components/formsContent/AddressAndDate';
import ImprovedNavbar from '../../components/Navigation/Navbar/ImprovedNavbar';

function CreateEventForm() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        eventName: '',
        organizers: [],
        categories: [],
        eventAddress: '',
        eventLocation: '',
        eventPrice: '',
        eventSeats: '',
        eventDate: '',
        eventTime: '',
    })

    const [organizers, setOrganizers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [sponsors, setSponsors] = useState([]);


    const formTitles = ['Detalles del evento', 'Localidad y disponibilidad', 'Direccion, duracion y fecha/hora']

    const handleNext = () => {
        if (page < 2 && page > -1) setPage(page + 1)
    }

    const handlePrev = () => {
        if (page < 3 && page > 0) setPage(page - 1)

    }

    const PageDisplay = () => {
        switch (page) {
            case 0: return <EventDetailsForm formData={formData} setFormData={setFormData} 
            organizers={organizers} setOrganizers={setOrganizers} categories={categories}
            setCategories={setCategories} sponsors={sponsors} setSponsors={setSponsors}/>;
            case 1: return <LocationAdAvailability formData={formData} setFormData={setFormData}
            locations={locations} setLocations={setLocations}/>;
            case 2: return <AddressAndDate formData={formData} setFormData={setFormData} />;
        }
    }


    return (
        <Layout>
            <div className='w-4/5 flex flex-col my-auto'>
                <progress className='progress progress-secondary w-3/5 m-auto' value={page + 1} max='3'></progress>
                <div className='w-full mt-5'>
                    <h1 className='text-2xl font-bold text-center'>{formTitles[page]}</h1>
                    <div className='body'>
                        {PageDisplay({ page })}
                    </div>
                    <div className='flex flex-wrap gap-10 justify-evenly mt-2'>
                        <button className='btn btn-md text-slate-200 bg-main hover:bg-darker-main' onClick={handlePrev} disabled={page === 0}>Anterior</button>
                        <button className='btn btn-md text-slate-200 bg-main hover:bg-darker-main ' onClick={handleNext} disabled={page === 2}>Siguiente</button>
                    </div>
                </div>
            </div>
            <ImprovedNavbar />
        </Layout>
    )
}

export default CreateEventForm