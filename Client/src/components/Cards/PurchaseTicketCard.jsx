import { useState } from "react";

const PurchaseTicketCard = () => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(() => count + 1);
    }

    const handleLess = () => {
        if (count > 0) {
            setCount(() => count - 1);
        }
    }

    return (
        <div className="card w-72  bg-base-100 shadow-xl">
            <div className="card-body p-4 gap-0">
                <h2 className="card-title text-2xl">Nombre de localidad</h2>
                <div className="flex flex-row">
                    <h2 className="text-xl gap-0">Precio:</h2>
                    <h2 className="text-green-500 text-xl">$50</h2>
                </div>
                <p className="mx-auto mt-5">Cantidad de tickets:</p>
                <div className="card-actions justify-center items-center mt-2">
                    <div className="join rounded">
                        <button 
                        className="btn btn-outline join-item"
                        onClick={handleLess}>Less</button>
                        <div className="bg-slate-50 border border-black text-center rounded-none">
                            <p className="w-3/12 join-item m-3 font-bold">{count}</p>
                        </div>
                        <button 
                        className="btn btn-outline join-item"
                        onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchaseTicketCard