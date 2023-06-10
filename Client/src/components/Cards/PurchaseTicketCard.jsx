import CountersButton from "../Buttons/CounterButtons";

const PurchaseTicketCard = () => {
    return (
        <div className="card w-72  bg-base-100 shadow-xl">
            <div className="card-body p-4 gap-0">
                <h2 className="card-title text-2xl">Nombre de localidad</h2>
                <h2 className="font-bold text-xl">Precio:</h2>
                <h2 className="font-bold ml-16 text-green-500 text-xl">$50</h2>
                <div className="card-actions justify-center items-center mt-5">
                    <CountersButton/>
                </div>
            </div>

        </div>
    );
};

export default PurchaseTicketCard