import { Link } from "react-router-dom"

const OrderCard = () => {
    return(
        <Link to='/order_details' className="card lg:card-side w-3/5 md:w-3/6  lg:h-2/6 lg:w-3/5 bg-base-100 shadow-lg hover:shadow-xl">
        <figure className="relative m-3 w-90 h-5/6">
        <img className="w-full h-full mt-2 rounded-lg object-cover" src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album"/></figure>
        <div className="card-body">
            <h1 className="card-title mb-1 text-2xl">Titulo</h1>
            <h2 className="text-l">Fecha: Martes 23 de mayo, 9:00 AM</h2>
            <h2 className="text-l">Pedido: 912824</h2>
            <h2 className="text-l">Fecha de compra: 20 de mayo</h2>
        </div>
        </Link>
        
    );
};

export default OrderCard