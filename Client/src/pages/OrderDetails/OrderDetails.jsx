import EventStatsTable from "../../components/EventStatsTable/EventStatsTable"
import Layout from "../../components/Layout/Layout"
import OrderItemsTable from "../../components/OrderItemsTable/OrderItemsTable"
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart"
import UserStatusTable from "../../components/UserStatusTable/UserStatusTable"
import ActiveTicket from "../../components/ActiveTicket/ActiveTicket"
import ExpiredTicket from "../../components/ExpiredTicket/ExpiredTicket"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import OrderDetailsTable from "../../components/OrderDetailsTable/OrderDetailsTable"




function OrderDetails() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

        const tabTitles = ['Tickets activos', 'Tickets expirados'];
        const tabContent = [<ActiveTicket />, <ExpiredTicket />];

        const handleTabClick = (index) => {
            setActiveTabIndex(index);
        };
        return (
            <Layout>
            <h1 className="text-5xl font-bold text-main mb-10 ">Titulo del evento</h1>
            <div className="flex w-full h-full justify-center  gap-5">
                <OrderItemsTable/>
                <div className="card w-96 h-full bg-base-100 shadow-xl">
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
              
              <div className="w-full">
                <Tabs
                selectedIndex={activeTabIndex}
                onSelect={handleTabClick}
                className="rounded-lg flex flex-col items-center"
                >
                <TabList className="btn-group p-10">
                {tabTitles.map((title, index) => (
                    <Tab
                    key={index}
                    className={`px-4 py-2 flex cursor-pointer ${activeTabIndex === index ? 'btn btn-primary' : 'btn btn-outline'
                        }`}
                    >
                    {title}
                    </Tab>
                ))}
                </TabList>

                {tabContent.map((content, index) => (
                <TabPanel
                    key={index}
                >
                    <h2 className="text-xl">{content}</h2>
                </TabPanel>
                ))}
            </Tabs>
              </div>
            </Layout>
        )
      }
  
  export default OrderDetails