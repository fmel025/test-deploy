export default function UserQRButton() {

    return (
        <div>
            <button className="btn bg-main hover:bg-darker-main font-bold text-white" onClick={() => window.my_modal_1.showModal()}>
                Codigo usuario
            </button>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h2 className="text-xl font-semibold">Usa este codigo para que te puedan transferir tickets 🥳</h2>
                    {/* Este codigo es de ejemplo */}
                    <p className="mt-5">1$5d#2u6</p>
                    <div className="modal-action">
                        <button className="btn">Cerrar</button>
                    </div>
                </form>
            </dialog>
        </div>

    );
}
