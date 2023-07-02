import { Link } from "react-router-dom"

const EventCard = () => {
  return (
    <Link to='/event/details/id/purchase/id' className='bg-white cursor-pointer w-64 h-fit rounded-lg shadow-xl hover:shadow-2xl'>

      <div className='m-4 p-2'>
        <h1 className='text-2xl font-bold text-main'>Localidad</h1>
        <div className="flex flex-row gap-1">
          <p className='font-medium'>Precio</p>
          <p className='font-medium text-green-500'>$200</p>
        </div>
        <div className="flex flex-row gap-1">
          <p className='font-medium'>Cupos</p>
          <p className='font-medium text-green-500'>50</p>
        </div>

      </div>
    </Link>
  )
}

export default EventCard