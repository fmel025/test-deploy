
import Layout from "../../components/Navigation/Layout/Layout"
import ClientNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"
import OrderCard from "../../components/Cards/OrderCard"


function PurchaseList() {
 
    return (
        <>
          <Layout>
          <h1 className="text-3xl lg:text-5xl font-bold text-main mt-2 mb-3">Mis ordenes</h1>
          <div className="flex flex-col gap-4 mb-5 w-full h-full items-center">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          </Layout>
          <ClientNavbar/>
        </>
    )
  }
  
  export default PurchaseList
  