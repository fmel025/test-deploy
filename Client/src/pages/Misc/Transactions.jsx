
import IssuedCard from "../../components/Cards/IssuedCard"
import ReceivedCard from "../../components/Cards/ReceivedCard"
import Layout from "../../components/Navigation/Layout/Layout"
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TransactionLayout from "../../components/Navigation/Layout/TransactionLayout"
import { IconArrowAutofitUp, IconArrowAutofitDown } from "@tabler/icons-react";


function Transactions() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Transferencias recibidas",
      value: "recived",
      icon: IconArrowAutofitDown,
      content: <TransactionLayout>
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
        <ReceivedCard />
      </TransactionLayout>
    },
    {
      label: "Transferencias emitidas",
      value: "issued",
      icon: IconArrowAutofitUp,
      content: <TransactionLayout>
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />
        <IssuedCard />

      </TransactionLayout>
    }
  ]


  return (
    <>
      <Layout>
        <h1 className="text-3xl lg:text-5xl font-bold text-blue-600 text-center mt-10 mb-10">Transferencias</h1>
        <div className="container mx-auto h-screen">
          <Tabs value={activeTab} className="flex flex-col items-center">
            <TabsHeader className="join join-vertical md:join-horizontal my-auto mt-5">
              {data.map(({ label, value, icon }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "btn bg-main btn-outline text-white join-item w-64 font-bold" : "btn bg-white join-item w-64 text-black font-bold"}>
                  <div className="flex items-center gap-2">
                    {React.createElement(icon, { className: "w-5 h-5" })}
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="items-center h-60 lg:h-full overflow-y-auto mt-10">
              {data.map(({ value, content }) => (
                <TabPanel key={value} value={value}>
                  {content}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </Layout>

    </>
  )
}

export default Transactions
