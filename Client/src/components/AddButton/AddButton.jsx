import { useNavigate } from 'react-router-dom';
import {IconTextPlus} from '@tabler/icons-react';


export default function AddButton() {
      const navigate = useNavigate();

      return (
            <button onClick={() => navigate('/create_event')} className="btn md:btn-sm md:mt-0.5 bg-main hover:bg-darker-main text-slate-100">
                  <IconTextPlus/>
                  <span>Nuevo evento</span>
            </button>

      );
}
