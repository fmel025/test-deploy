
import IssuedCard from "../../components/IssuedCard/IssuedCard"
import ReceivedCard from "../../components/ReceivedCard/ReceivedCard"
import Layout from "../../components/Layout/Layout"


function Transactions() {
return (
    <Layout>
      <h1 className="text-5xl font-bold text-blue-600 mt-5 mb-10">Transferencias</h1>
      <div className="flex gap-10 w-4/5 h-5/12 overflow-x-auto">
        <div className="w-{360} flex flex-col  items-center max-h-full">
            <h1 className="text-blue-600 font-bold text-lg">Transferencias emitidas</h1>
            <div className="mt-5 mb-5 flex flex-col  h-3/4 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300">
              <IssuedCard/>
              <IssuedCard/>
              <IssuedCard/>
              <IssuedCard/>
              <IssuedCard/>
              <IssuedCard/>
            </div>
        </div>
        <div className="w-{360} flex flex-col items-center max-h-full">
            <h1 className="text-blue-600 font-bold text-lg">Transferencias recibidas</h1>
            <div className="mt-5 mb-5 flex flex-col  h-3/4 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300">
              <ReceivedCard/>
              <ReceivedCard/>
              <ReceivedCard/>
              <ReceivedCard/>
            </div>
        </div>
      </div>
      
    </Layout>
)
}

export default Transactions
  