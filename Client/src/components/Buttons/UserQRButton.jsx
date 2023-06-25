export default function UserQRButton() {
    
    


    return (
        <div>
            <button className="btn bg-main hover:bg-darker-main font-bold text-white" onClick={() => window.my_modal_1.showModal()}>Generar QR</button>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <figure className='relative m-3 w-90 h-2/5'>
                        <img className='w-full h-full object-cover rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='QR' />
                    </figure>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Cerrar</button>
                    </div>
                </form>
            </dialog>
        </div>

    );
}
