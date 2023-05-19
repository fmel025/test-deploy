import ScanButton from "../ScanButton/ScanButton";
import TransferButton from "../TransferButton/TransferButton"

const ActiveTicket = () => {
    return(
        <div className='flex bg-white cursor-pointer h-48 w-96 rounded-lg shadow-lg p-2'>
            <figure className="ml-2 w-5/12 flex items-center">
                <img className="object-scale-down h-48 w-96" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="p-3 w-7/12">
                <h1 className='mt-1 text-xl font-bold'>Titulo del evento</h1>
                <p className='mt-2 text-lg font-medium text-gray-400'>Fecha: 69 de mayo</p>
                <p className='mt-1 text-lg font-medium text-gray-400'>Pedido: 666</p>
                <ScanButton/>
                <TransferButton/>
            </div>
      </div>
    );
};

export default ActiveTicket