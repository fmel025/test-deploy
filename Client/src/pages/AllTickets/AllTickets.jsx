


import Layout from "../../components/Layout/Layout"
import ActiveTicket from "../../components/ActiveTicket/ActiveTicket"
import ExpiredTicket from "../../components/ExpiredTicket/ExpiredTicket"

function AllTickets() {
return (
    <Layout>
      <div className="flex gap-10 w-4/5 h-5/12 mt-10 overflow-hidden my-5">
        <div className="w-1/2 flex flex-col  items-center max-h-full">
            <h1 className="text-main font-bold text-lg">Tickets actuales</h1>
            <div className="mt-5 mb-5 flex flex-col  h-3/4 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300">
              <ActiveTicket/>
              <ActiveTicket/>
              <ActiveTicket/>
              <ActiveTicket/>
              <ActiveTicket/>
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
      </div>
      
    </Layout>
)
}

export default AllTickets
  