import CountersButton from "../CounterButtons/CounterButtons";

const PurchaseTicketCard = () => {
    return(
        <div className="card w-2/4  bg-base-100 shadow-xl grid grid-cols-2">
            <div className="card-body p-4 gap-0 ml-14">
                <h2 className="card-title mb-1 text-2xl">Nombre de localidad</h2>
                <h2 className="font-bold text-xl">Precio:</h2>
                <h2 className="font-bold ml-16 text-green-500  text-xl">$50</h2>
            </div>

            <CountersButton />
        </div>
        
    );
};

export default PurchaseTicketCard