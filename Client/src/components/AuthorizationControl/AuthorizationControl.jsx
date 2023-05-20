export default function AuthorizationControl() {
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-2 ">
         <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Administrador</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Administrador</div>
                </label>

                <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Moderador</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Moderador</div>
                </label>

                <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Analista</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Analista</div>
                </label>
    </div>
    
        
        );
  }
  