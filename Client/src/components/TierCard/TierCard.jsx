const EventCard = () => {
    return(
        <div className='bg-white cursor-pointer w-64 h-80 rounded-lg shadow-lg hover:shadow-2xlBlue'>
        <figure className='relative m-3 w-90 h-2/5'>
          <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
        </figure>
        <div className='m-4'>
          <h1 className='mt-1 text-2xl font-bold'>Tipo de localidad</h1>
          <p className='mt-2 text-sm font-medium'>Precio</p>
          <p className='ml-5 text-sm font-light'>420</p>
          <p className='mt-1 text-sm font-medium'>Cupos</p>
          <p className='ml-5 text-sm font-light'>69</p>
          
        </div>
      </div>
    )
}

export default EventCard