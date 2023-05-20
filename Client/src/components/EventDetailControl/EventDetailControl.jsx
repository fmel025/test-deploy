export default function EventDetailControl() {
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-1">
            <button className="btn bg-main border-none px-10 hover:bg-darker-main">Editar evento</button>
            <button className="btn bg-main border-none px-10 hover:bg-darker-main">Asignar validadores</button>
            <button className="btn bg-red-400 border-none px-10 hover:bg-red-700">Desactivar evento</button>
            <button className="btn bg-red-400 border-none px-10 hover:bg-red-700">Quitar validadores</button>
        </div>
        
        );
  }
  