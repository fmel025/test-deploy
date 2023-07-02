import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import EditOrganizersForm from '../../formsContent/editEvent/EditOrganizersForm';
import EditTiersForm from '../../formsContent/editEvent/EditTiersForm';
import EditCategoriesForm from '../../formsContent/editEvent/EditCategoriesForm';

export default function EventDetailControl() {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [tiers, setTiers] = useState([]);
    const [organizers, setOrganizers] = useState([]);

    const params = useParams();
    console.log(params);



    return (
        <>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-1">
                <button onClick={() => navigate('/edit/event/id')}
                    className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">Editar evento</button>
                <button onClick={() => navigate('/manage/scanners')}
                    className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">Administrar validadores</button>
                <label className="btn swap bg-main border-none px-10 hover:bg-darker-main text-white font-bold">
                    <input type="checkbox" />
                    <div className="swap-on">Activar evento</div>
                    <div className="swap-off">Desactivar evento</div>
                </label>
            </div>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-1 mt-5">
                <button onClick={() => navigate('/edit/categories/id')}
                    className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">
                    Editar categorias
                </button>
                <button onClick={() => navigate('/edit/organizers/id')}
                    className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">
                    Editar organizadores
                </button>
                <button onClick={() => navigate('/edit/tiers/id')}
                    className="btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold">
                    Editar localidades
                </button>
                <button onClick={() => navigate('/edit/sponsors/id')}
                    className='btn bg-main border-none px-10 hover:bg-darker-main text-white font-bold'>
                    Editar patrocinadores
                </button>


            </div>

            {/* Modal 1 */}
        </>
    );
}
