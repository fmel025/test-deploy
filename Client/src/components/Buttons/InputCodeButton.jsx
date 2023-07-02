import { useNavigate } from 'react-router-dom'; 
function InputCodeButton() {
  const navigate = useNavigate();
  return (
    <div>
        <button className="btn bg-main px-10 hover:bg-darker-main font-bold text-white" onClick={()=>window.my_modal_5.showModal()}>Aceptar</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Confirmar transferencia</h3>
            <p className="py-4">Ingrese codigo de confirmacion</p>
            <input type='text' className='input-bordered input bg-slate-200 w-4/5' placeholder='Codigo de usuario'></input>
                   
            <div className="modal-action">
              <button className="btn bg-red-500 hover:bg-red-700 font-bold text-white">Cerrar</button>
              <button onClick={() => navigate('/transaction/id')} className="btn  bg-main hover:bg-darker-main font-bold text-white">Aceptar</button>
            </div>
          </form>
        </dialog>
    </div>
  )
}

export default InputCodeButton