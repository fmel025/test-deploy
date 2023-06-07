import { useNavigate } from 'react-router-dom'; 

export default function ScanButton() {
  
 const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/transaction')} className="btn m-1 bg-main hover:bg-darker-main text-white font-bold">
  Transferir </button>
        );
  }
  