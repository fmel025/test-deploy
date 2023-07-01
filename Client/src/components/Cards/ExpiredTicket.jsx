import { useState } from "react";

const ExpiredTicket = () => {

    const [title, setTitle] = useState("Titulo del evento");
    const [date, setDate] = useState("mar., 4 de jul. de 2023");
    const [location, setLocation] = useState("VIP");

    return(
        <div className="mx-auto w-72 md:mx-auto md:w-2/3 card md:card-side bg-base-100 shadow-xl">
            <figure>
                <img className="h-48 lg:h-64" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="card-body"> 
                <div className="flex flex-col gap-2">
                    <h1 className="card-title">{title}</h1>
                    <p className='text-sm font-medium text-gray-400 mt-10'>Fecha: {date}</p>
                    <p className='text-sm font-medium text-gray-400'>Localidad: {location}</p>
                </div>
            </div>
        </div>
    );
};

export default ExpiredTicket