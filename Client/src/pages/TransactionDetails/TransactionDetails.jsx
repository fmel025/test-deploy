import Layout from '../../components/Layout/Layout'

function TransactionDetails() {
    return (
      <Layout>
            <h1 className='font-semibold text-2xl lg:text-5xl my-10 lg:px-10'>Transferencia exitosa</h1>
              <figure className='relative m-3 w-90 h-3/6 md:w-2/4 w-4/5'>
                    <img className='w-full h-full object-contain rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png' alt='headphones' />
              </figure>
              <p className='font-semibold lg:text-2xl mb-5 lg:px-10'>Fecha: 15 de Junio 9:00 AM</p>    
              <p className='font-semibold lg:text-2xl mb-5 lg:px-10'>Usuario receptor: Fernando Melendez</p>    
      </Layout>
    )
  }
  
  export default TransactionDetails
  
  