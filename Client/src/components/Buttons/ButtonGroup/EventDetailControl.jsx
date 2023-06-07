import { useNavigate } from 'react-router-dom';

export default function EventDetailControl() {
    const navigate = useNavigate();
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal  gap-1">
            <button onClick={() => navigate('/editevent')}
            className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">Editar evento</button>
            <button onClick={() => navigate('/managescanners')}
            className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">Administrar validadores</button>
            <label className="btn swap bg-main border-none px-10 hover:bg-darker-main text-white font-bold">
                <input type="checkbox" />
                <div className="swap-on">Activar evento</div>
                <div className="swap-off">Desactivar evento</div>
            </label>
        </div>
        
        );
  }
  