import Layout from "../../components/Navigation/Layout/Layout"
import OrderItemsTable from "../../components/Tables/Items/OrderItemsTable"
import { useState } from "react";
import { IconInfoHexagon } from "@tabler/icons-react";
import ActiveTickets from "../../components/Tables/Table/ActiveTickets";
import ExpiredTickets from "../../components/Tables/Table/ExpiredTickets";

function OrderDetails() {
    
    //State for tabs
    const [tabPage, setTabPage] = useState(0);

    const handleNext = () => {
        if (tabPage < 1 && tabPage > -1) setTabPage(tabPage + 1)
    }

    const handlePrev = () => {
        if (tabPage < 2 && tabPage > 0) setTabPage(tabPage - 1)
    }

    const PageDisplay = () => {
        switch (tabPage) {
            //Aca le podemos setear las props que traigamos de la peticion
            //A.K.A. los tickets del evento
            case 0: return <ActiveTickets />;
            case 1: return <ExpiredTickets />;
        }
    }

    return (
        <>
            <Layout>
                <h1 className="text-2xl lg:text-5xl font-bold text-main mb-10 text-center">Titulo del evento</h1>
                <div className="flex flex-wrap w-full justify-center gap-5">
                    <OrderItemsTable />
                    <span className="alert alert-info md:hidden w-5/6 m-5 text-sm">
                        <IconInfoHexagon className="text-sm" />
                        Haga scroll horizontal sobre la tabla para mostrar toda la informacion
                    </span>
                    <div className="card w-72 h-fit bg-base-100 shadow-xl">
                        <div className="p-5 ">
                            <h2 className="card-title font-bold mx-5 my-5">Detalles de la orden</h2>
                            <p className="font-semibold mx-5 mt-2">Nombre de comprador</p>
                            <p className="font-light mx-5">Samuel Adonay Ortiz</p>
                            <p className="font-semibold mx-5 mt-2">Fecha de compra</p>
                            <p className="font-light mx-5">lun., 3 de jul. de 2023 </p>
                        </div>
                    </div>
                </div>

                <div className="divider divider-vertical w-10/12 mx-auto my-5"></div>
                    <div className="join gap-1">
                        <button 
                        className={`btn join-item ${tabPage === 0 ? 'btn-primary' : ''}`}
                        onClick={handlePrev}>Tickets activos</button>
                        <button 
                        className={`btn join-item ${tabPage === 1 ? 'btn-primary' : ''}`}
                        onClick={handleNext}>Tickets expirados</button>
                    </div>
                <div className="body mt-10">
                    {PageDisplay({ tabPage })}
                </div>
            </Layout>
        </>
    )
}

export default OrderDetails