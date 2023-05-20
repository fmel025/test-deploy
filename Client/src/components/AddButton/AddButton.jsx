import { useNavigate } from 'react-router-dom';

export default function AddButton() {
      const navigate = useNavigate();

    return (
        <div className="relative mb-4  items-stretch">
        <button onClick={() => navigate('/create_event')} className="btn  p-2 bg-main hover:bg-darker-main btn-square">
        </button>
  </div>
        
        );
  }
  