
import Layout from "../../components/Navigation/Layout/Layout"
import PurchaseTicketCard from "../../components/Cards/PurchaseTicketCard"
import AcceptButton from "../../components/Buttons/AcceptButton"
import CancelButton from "../../components/Buttons/CancelButton"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"


function PurchaseTicket() {
 
    return (
        <>
          <Layout>
          <h1 className="text-2xl lg:text-5xl font-bold text-main mt-5 mb-2 text-center">Titulo del evento</h1>
          <h2 className="text-xl  text-gray-400 mb-10">mar., 4 de jul. de 2023 7:30 - 18:00 CST</h2>
          <div className="flex flex-col gap-4 mb-5 w-full items-center">
            <PurchaseTicketCard/>
          </div>
          <div className="w-full flex flex-row justify-center gap-2 md:gap-5 ">
            <AcceptButton/>
            <CancelButton/>
          </div>
          </Layout>
          <ImprovedNavbar/>
        </>
    )
  }
  
  export default PurchaseTicket
  