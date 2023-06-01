


import Layout from "../../components/Layout/Layout"
import ActiveTicket from "../../components/ActiveTicket/ActiveTicket"
import ExpiredTicket from "../../components/ExpiredTicket/ExpiredTicket"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";


function AllTickets() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabTitles = ['Tickets activos', 'Tickets expirados'];
  const tabContent = [<ActiveTicket />, <ExpiredTicket />];

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };
  return (
    <Layout>

      {/* <div className="flex gap-10 w-4/5 h-5/12 mt-10 overflow-hidden my-5">
        <div className="w-1/2 flex flex-col  items-center max-h-full">
          <h1 className="text-main font-bold text-lg">Tickets actuales</h1>
          <div className="mt-5 mb-5 flex flex-col  h-3/4 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300">
            <ActiveTicket />
            <ActiveTicket />
            <ActiveTicket />
            <ActiveTicket />
            <ActiveTicket />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center max-h-full">
          <h1 className="text-main font-bold text-lg">Tickets pasados</h1>
          <div className="mt-5 mb-5 flex flex-col  h-3/4 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300">
            <ExpiredTicket />
            <ExpiredTicket />
            <ExpiredTicket />
            <ExpiredTicket />
          </div>
        </div>
      </div> */}

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

    </Layout>
  )
}

export default AllTickets
