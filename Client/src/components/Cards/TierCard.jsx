import { Link } from "react-router-dom"

const EventCard = () => {
    return(
        <Link to='/purchaseticket' className='bg-white cursor-pointer w-64 h-48 rounded-lg shadow-xl hover:shadow-2xl'>
        
          <div className='m-4 p-2'>
            <h1 className='text-2xl font-bold text-main'>Localidad</h1>
            <p className='mt-2 text-lg font-medium'>Precio</p>
            <p className='ml-5 text-base font-medium text-green-500'>$120</p>
            <p className='mt-1 text-lg font-medium'>Cupos</p>
            <p className='ml-5 text-base font-medium'>50</p>
            
          </div>
      </Link>
    )
}

export default EventCard