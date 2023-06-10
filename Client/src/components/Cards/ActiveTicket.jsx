import ScanButton from "../Buttons/ScanButton";
import TransferButton from "../Buttons/TransferButton"

const ActiveTicket = () => {
    return (
        <div className="mx-auto w-72 md:mx-auto md:w-2/3 card md:card-side bg-base-100 shadow-xl ">
            <figure>
                <img className="h-48 md:h-64" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">Titulo del evento</h1>
                <p className='mt-2 text-lg font-medium text-gray-400'>Fecha: 23 de mayo</p>
                <p className='mt-1 text-lg font-medium text-gray-400'>Localidad: VIP</p>
                <div className="card-actions justify-center lg:justify-start">
                    <div className="join join-horizontal">
                        <ScanButton/>
                        <TransferButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveTicket