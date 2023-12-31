const IssuedCard = () => {
    return(
        <div className='card bg-white cursor-pointer h-52 w-80 md:w-96 rounded-lg shadow-lg p-3'>
          <h1 className='mt-1 text-2xl font-bold text-main'>Transaccion Emitida</h1>
          <p className='mt-2 text-lg font-medium'>Receptor:</p>
          <p className='mt-1 text-lg font-medium'>Fecha</p>
          <p className='mt-1 text-lg font-medium'>Evento</p>
          <p className='mt-1 text-lg font-medium'>Localidad</p>
      </div>
    )
}

export default IssuedCard