import { useNavigate } from 'react-router-dom';

export default function EventDetailControl() {
    const navigate = useNavigate();
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-1">
            <button onClick={() => navigate('/edit_event')}
            className="btn bg-main border-none px-10 hover:bg-darker-main">Editar evento</button>
            <button onClick={() => navigate('/manage_scanners')}
            className="btn bg-main border-none px-10 hover:bg-darker-main">Administrar validadores</button>
            <label className="btn swap bg-main border-none px-10 hover:bg-darker-main">
                <input type="checkbox" />
                <div className="swap-on">Activar evento</div>
                <div className="swap-off">Desactivar evento</div>
            </label>
        </div>
        
        );
  }
  