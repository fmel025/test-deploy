
import Layout from '../../components/Layout/Layout'
import { UimGoogle } from '@iconscout/react-unicons-monochrome'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <Layout>
    
    <div className="rounded w-4/5 md:w-3/5 lg:w-2/5 flex-col justify-center p-10 mt-10 md:mt-28 bg-white">
    {/* <h1 className="text-5xl font-bold text-main mb-10  ">EventMate</h1> */}
        <h1 className='font-semibold text-3xl text-center mb-10'>Incio de sesion</h1>
        <p className='font-semibold'>Correo electronico:</p>
        <input type='text' className='input w-full input-sm bg-slate-200' placeholder='example@gmail.com'></input>
        <p className='font-semibold'>Contraseña:</p>
        <input type='password' className='input w-full input-sm bg-slate-200' placeholder='********'></input>
        <div className='flex flex-col justify-center items-center my-5'>
        <div onClick={() => navigate('/')} className='btn bg-main hover:bg-darker-main'>Iniciar sesion</div> 
        <div className='divider'>o</div>         
        </div>
        {/* Google login button */}
        <div className='flex flex-col justify-center items-center'>
            <button  className='btn btn-outline' onClick={() => navigate('/')}>
              <UimGoogle className='mr-2 text-main'/>
              Iniciar sesion con Google
            </button>
        </div>
    </div>
    </Layout>
  )
}

export default Login