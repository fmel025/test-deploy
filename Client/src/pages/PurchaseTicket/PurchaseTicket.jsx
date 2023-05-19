
import Layout from "../../components/Layout/Layout"
import PurchaseTicketCard from "../../components/PurchaseTicketCard/PurchaseTicketCard"
import AcceptButton from "../../components/AcceptButton/AcceptButton"
import CancelButton from "../../components/CancelButton/CancelButton"


function PurchaseTicket() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mt-10 mb-2">Titulo del evento</h1>
          <h2 className="text-xl  text-gray-400 mb-10">69 May,2023 - 4pm</h2>
          <div className="flex flex-col gap-4 mb-5 w-full items-center">
            <PurchaseTicketCard/>
            <PurchaseTicketCard/>
            <PurchaseTicketCard/>
          </div>
          <div className="w-full flex justify-center gap-16 m-5">
            <AcceptButton/>
            <CancelButton/>
          </div>
          
        </Layout>
    )
  }
  
  export default PurchaseTicket
  