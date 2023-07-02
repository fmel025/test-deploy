import { useState } from 'react'
import Layout from '../Navigation/Layout/Layout';
import AddressAndDate from './AddressAndDate';
import ClientNavbar from '../Navigation/Navbar/ImprovedNavbar';
import EditEventDetailsForm from './editEvent/EditEventDetailsForm';



function EditEvent() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        eventName: '',
        eventDescription: '',
        eventAddress: '',
        eventLocation: '',
        eventPrice: '',
        eventSeats: '',
        eventDate: '',
        eventTime: '',
    })


    const formTitles = ['Detalles del evento', 'Direccion y fecha/hora']

    const handleNext = () => {
        if (page < 1 && page > -1) setPage(page + 1)
    }

    const handlePrev = () => {
        if (page < 2 && page > 0) setPage(page - 1)

    }

    const PageDisplay = () => {
        switch (page) {
            case 0: return <EditEventDetailsForm formData={formData} setFormData={setFormData} />;
            case 1: return <AddressAndDate formData={formData} setFormData={setFormData} />;
        }
    }


    return (
        <Layout>
            <div className='w-4/5 flex flex-col my-auto'>
                <progress className='progress progress-secondary w-3/5 m-auto' value={page + 1} max='2'></progress>
                <div className='w-full mt-5'>
                    <h1 className='text-2xl font-bold text-center'>{formTitles[page]}</h1>
                    <div className='body'>
                        {PageDisplay({ page })}
                    </div>
                    <div className='flex flex-wrap gap-10 justify-evenly mt-2'>
                        <button className='btn btn-md text-slate-200 bg-main hover:bg-darker-main' onClick={handlePrev} disabled={page === 0}>Anterior</button>
                        <button className='btn btn-md text-slate-200 bg-main hover:bg-darker-main ' onClick={handleNext} disabled={page === 1}>Siguiente</button>
                    </div>
                </div>
            </div>
            <ClientNavbar />
        </Layout>
    )
}

export default EditEvent