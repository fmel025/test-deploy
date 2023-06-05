
import Layout from '../../components/Layout/Layout'
import InputCodeButton from '../../components/InputCodeButton/InputCodeButton'

function Transaction() {
  return (
    <Layout>
        <div className='flex flex-col w-full h-full align-middle justify-center mt-10 text-center'>
                <h1 className='font-semibold text-2xl lg:text-5xl mb-10 lg:px-10'>Transferir ticket</h1>
                <p className='font-semibold lg:text-2xl mb-10 lg:px-10'>Ingrese el codigo del usuario al que se le desea transferir:</p>
                <div className='flex flex-col justify-center items-center my-5 gap-16'>
                    <input type='text' className='input-bordered input bg-slate-200 w-5/6 lg:w-3/6' placeholder='Codigo de usuario'></input>
                    <InputCodeButton/>
                </div>
            </div>
        
    </Layout>
  )
}

export default Transaction

