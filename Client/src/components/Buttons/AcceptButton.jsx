import { useNavigate } from 'react-router-dom';

export default function AcceptButton() {
    const navigate = useNavigate();
    return (
        <button  type="button" onClick={() => navigate('/futureevents')}
        className="text-white w-1/12 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3.5 text-center">Aceptar</button>
    );
  }
  