
import Layout from "../../components/Layout/Layout"
import ImprovedNavbar from "../../components/Navbar/ImprovedNavbar"
import OrderCard from "../../components/OrderCard/OrderCard"


function PurchaseList() {
 
    return (
        <>
          <Layout>
          <h1 className="text-5xl font-bold text-main mt-2 mb-3">Mis ordenes</h1>
          <div className="flex flex-col gap-4 mb-5 w-full h-full items-center">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          </Layout>
          <ImprovedNavbar/>
        </>
    )
  }
  
  export default PurchaseList
  