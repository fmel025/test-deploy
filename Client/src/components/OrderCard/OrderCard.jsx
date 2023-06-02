import { Link } from "react-router-dom"

const OrderCard = () => {
    return(
        <Link to='/order_details' className="card w-2/4 h-2/6 bg-base-100 shadow-lg hover:shadow-xl grid grid-cols-3">
            <figure className='relative m-3 w-90 h-5/6 '>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
            </figure>
            <div className="card-body flex p-4 gap-0 ml-2 w-96">
                <h2 className="card-title mb-1 text-2xl">Titulo</h2>
                <h2 className="text-l">Fecha: Martes 23 de mayo, 9:00 AM</h2>
                <h2 className="text-l">Pedido: 912837</h2>
                <h2 className="text-l">Fecha de compra</h2>
            </div>

        </Link>
        
    );
};

export default OrderCard