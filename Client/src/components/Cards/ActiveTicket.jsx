import ScanButton from "../Buttons/ScanButton";
import TransferButton from "../Buttons/TransferButton"
import { useState } from "react";

const ActiveTicket = () => {
    /* Aca se pasan mediente props la informacion necesaria para llenar la tarjeta */
    const [title, setTitle] = useState("Titulo del evento");
    const [date, setDate] = useState("7:30 - 18:00 CST");
    const [location, setLocation] = useState("VIP");


    return (
        <div className="mx-auto w-72 md:mx-auto md:w-2/3 card md:card-side bg-base-100 shadow-xl ">
            <figure>
                <img className="h-48 md:h-fit" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col gap-2">
                    <h1 className="card-title">{title}</h1>
                    <p className='text-sm text-gray-400'>Fecha: {date}</p>
                    <p className='text-sm text-gray-400'>Localidad: {location}</p>
                </div>
                <div className="card-actions justify-center lg:justify-end mt-5">
                    <div className="join join-horizontal">
                        <ScanButton />
                        <TransferButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveTicket