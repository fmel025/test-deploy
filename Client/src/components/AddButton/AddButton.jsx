import { useNavigate } from 'react-router-dom';
import { IconCirclePlus } from '@tabler/icons-react';

export default function AddButton() {
      const navigate = useNavigate();

    return (
        <div className="relative mb-4 items-center">
        <button onClick={() => navigate('/create_event')} className="btn btn-sm bg-main hover:bg-darker-main btn-square">
              <IconCirclePlus />
        </button>
  </div>
        
        );
  }
  