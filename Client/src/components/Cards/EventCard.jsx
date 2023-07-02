import { Link } from "react-router-dom"
import { IconMapPin } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconTicket } from '@tabler/icons-react';

const EventCard = () => {
  return (
    <Link to='/event/details/id' className="card card-compact w-72 bg-base-100 shadow-xl hover:shadow-2xl">
      <figure><img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className='card-title'>
          Concierto
        </h2>
        <div className="flex flex-row items-center gap-0.5">
          <IconMapPin size={15} className="mt-1" />
          <p className=' text-sm font-medium'>Lugar</p>
        </div>
        <p className='ml-5 text-sm text-slate-500 truncate'>Estadio Magico Gonzales, Platea Sur</p>
        <div className="flex flex-row items-center gap-0.5">
          <IconCalendarEvent size={15} />
          <p className='text-sm font-medium'>Fecha</p>
        </div>
        <p className='ml-5 text-sm  text-slate-500'>10 de mayo</p>
        <div className="flex flex-row items-center gap-1">
          <IconTicket size={15} className="mt-1" />
          <p className='text-sm font-medium'>Cupos disponibles:</p>
        </div>
        <p className='ml-5 text-sm  text-slate-500'>50</p>
      </div>
    </Link>
  )
}

export default EventCard