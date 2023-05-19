const StatsCard = () => {
    return(
        <div className='flex bg-white cursor-pointer h-3/6 w-4/6 rounded-lg shadow-lg p-2'>
            <figure className=" w-5/12 flex flex-col items-center">
                <h1 className='mt-1 text-xl font-bold'>Titulo del evento</h1>
                <img className="mb-1 object-scale-down h-48 w-96" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="flex w-7/12">
                <div className="p-3 w-1/2 flex flex-col justify-center ">
                    <h1 className='mt-1 text-xl font-bold'>Asientos vendidos</h1>
                    <p className='mt-2 text-lg font-medium '>Tier 1</p>
                    <p className='mt-1 text-lg font-medium '>Tier 2</p>
                    <p className='mt-1 text-lg font-medium '>Tier 3</p>
                </div>
                <div className="p-3 w-1/2 flex flex-col justify-center ">
                    <p className='mt-2 text-lg font-medium '>Ganancia total:</p>
                    <p className='mt-1 text-lg font-medium '>Nada</p>
                </div>
            </div>
            
      </div>
    );
};

export default StatsCard