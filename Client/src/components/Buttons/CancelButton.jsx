import { useNavigate } from 'react-router-dom';

export default function CancelButton() {
    const navigate = useNavigate();
    return (
        <button type="button" onClick={() => navigate('/event_details')}
        className="text-white w-1/12 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3.5 text-center">Cancelar</button>
    );
  }
  