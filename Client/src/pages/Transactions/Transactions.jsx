
import IssuedCard from "../../components/IssuedCard/IssuedCard"
import ReceivedCard from "../../components/ReceivedCard/ReceivedCard"
import Layout from "../../components/Layout/Layout"
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TransactionLayout from "../../components/Layout/TransactionLayout"
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
    <Layout>
      <h1 className="text-5xl font-bold text-blue-600 mt-5 mb-10">Transferencias</h1>
      <Tabs value={activeTab} className="w-2/3">
        <TabsHeader className="bg-slate-200 p-2 mx-10 text-center">
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-blue-500" : ""}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        {/* Make ir scrollable*/}
        <TabsBody className="items-center m-auto">
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value}>
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

    </Layout>
  )
}

export default Transactions
