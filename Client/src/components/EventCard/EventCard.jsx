import { Link } from "react-router-dom"
import { IconMapPin } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconTicket } from '@tabler/icons-react';

const EventCard = () => {
    return(
        <Link to='/event_details' className='bg-white cursor-pointer w-64 h-92 rounded-lg shadow-lg hover:shadow-2xlBlack'>
        <figure className='relative m-3 w-90 h-2/5'>
          <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
        </figure>
        <div className='m-4'>
          <h1 className='mt-1 text-2xl font-bold'>
            Fiesta del sexo
          </h1>
          <div className="flex flex-row items-center gap-1">
            <IconMapPin size={15} className="mt-1"/>
            <p className='mt-2 text-md font-medium'>Lugar</p>
          </div>
          <p className='ml-5 text-sm font-light'>Casa de pupa</p>
          <div className="flex flex-row items-center gap-1">
            <IconCalendarEvent size={15} />
            <p className='mt-1 text-sm font-medium'>Fecha</p>
          </div>
          
          <p className='ml-5 text-sm font-light'>69 de mayo</p>
          <div className="flex flex-row items-center gap-1">
            <IconTicket size={15} className="mt-1"/>
            <p className='mt-2 text-sm font-medium'>Cupos disponibles:</p>
          </div>
          <p className='ml-5 text-sm font-light'>50</p>    
        </div>
      </Link>
    )
}

export default EventCard