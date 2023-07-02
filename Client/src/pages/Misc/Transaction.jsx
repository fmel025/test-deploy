
import Layout from '../../components/Navigation/Layout/Layout'
import InputCodeButton from '../../components/Buttons/InputCodeButton'
import { useNavigate } from 'react-router'
import ClientNavbar from '../../components/Navigation/Navbar/ImprovedNavbar';

function Transaction() {

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/purchase/id");
  };

  return (
    <>
      <Layout>
      <div className='card bg-white mx-10 my-auto md:m-auto'>
        <div className='card-body'>
          <h1 className='card-title font-semibold text-3xl lg:text-5xl'>Transferir ticket</h1>
          <p className='font-semibold'>Ingrese el codigo del usuario al que se le desea transferir:</p>
          <div className='form-control mt-2'>
            <label className='label'>
              <span className='label-text'>Codigo de usuario</span>
            </label>
            <input type='text' className='input w-full input-sm bg-slate-200' placeholder='Codigo de usuario'></input>
          </div>
          <div className='card-actions mt-2'>
            <InputCodeButton />
            <button className='btn btn-secondary bg-red-500 hover:bg-red-700 text-white font-bold ' onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </div>
      </Layout>
      <ClientNavbar/>
    </>
  )
}

export default Transaction

