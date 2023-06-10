import Layout from "../../components/Navigation/Layout/Layout"
import OrderItemsTable from "../../components/Tables/Items/OrderItemsTable"
import ActiveTicket from "../../components/Cards/ActiveTicket"
import ExpiredTicket from "../../components/Cards/ExpiredTicket"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { IconInfoHexagon } from "@tabler/icons-react";
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"

function OrderDetails() {


    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "Tickets activos",
            value: "active",
            content: <ActiveTicket />
        },
        {
            label: "Tickets expirados",
            value: "expired",
            content: <ExpiredTicket />
        }
    ]

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
                            <p className="font-light mx-5">Samutel Adonay</p>
                            <p className="font-semibold mx-5 mt-2">Fecha de compra</p>
                            <p className="font-light mx-5">20 de mayo </p>
                            <p className="font-semibold mx-5 mt-2">Numero de orden</p>
                            <p className="font-light mx-5"> 2379129</p>
                        </div>
                    </div>
                </div>

                <div className="divider divider-vertical w-10/12 mx-auto my-5"></div>
                <div className="container">
                    <Tabs value={activeTab} className="flex flex-col items-center">
                        <TabsHeader className="join join-vertical md:join-horizontal my-auto">
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={activeTab === value ? "btn bg-main text-white join-item w-64 font-bold" : "btn bg-white join-item w-64 text-black font-bold"}>
                                    <div className="flex flex-row items-center">
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody className="items-center my-auto overflow-y-auto">
                            {data.map(({ value, content }) => (
                                <TabPanel key={value} value={value}>
                                    {content}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </Layout>
            <ImprovedNavbar />
        </>
    )
}

export default OrderDetails