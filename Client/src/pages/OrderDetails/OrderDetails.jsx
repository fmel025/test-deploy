import EventStatsTable from "../../components/EventStatsTable/EventStatsTable"
import Layout from "../../components/Layout/Layout"
import OrderItemsTable from "../../components/OrderItemsTable/OrderItemsTable"
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart"
import UserStatusTable from "../../components/UserStatusTable/UserStatusTable"


function OrderDetails() {
 
    return (
        <Layout>
        <h1 className="text-5xl font-bold text-main mb-10 ">Titulo del evento</h1>
        <div className="flex w-full h-full justify-center  gap-5">
            <OrderItemsTable/>
            <div className="card w-96 h-3/6 bg-base-100 shadow-xl">
                <div className="p-5 ">
                    <h2 className="card-title font-bold mx-5 my-5">Detalles de la orden</h2>
                    <p className="font-semibold mx-5 mt-2">Nombre de comprador</p>
                    <p className="font-light mx-5">Samutel Adonay</p>
                    <p className="font-semibold mx-5 mt-2">Fecha de compra</p>
                    <p className="font-light mx-5">20 de mayo </p>
                    <p className="font-semibold mx-5 mt-2">Numero de orden</p>
                    <p className="font-light mx-5"> 2379129</p>

                </div>
            </div>
        </div>
          
        </Layout>
    )
  }
  
  export default OrderDetails