const EventCard = () => {
    return(
        <div className='bg-white cursor-pointer w-64 h-48 rounded-lg shadow-lg hover:shadow-2xlBlack'>
        
          <div className='m-4 p-2'>
            <h1 className='text-2xl font-bold'>Tipo de localidad</h1>
            <p className='mt-2 text-lg font-medium'>Precio</p>
            <p className='ml-5 text-base font-medium text-green-500'>$420</p>
            <p className='mt-1 text-lg font-medium'>Cupos</p>
            <p className='ml-5 text-base font-medium'>69</p>
            
          </div>
      </div>
    )
}

export default EventCard