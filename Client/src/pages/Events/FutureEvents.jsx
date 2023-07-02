
import FutureEventCard from "../../components/Cards/FutureEventCard"
import Layout from "../../components/Navigation/Layout/Layout"


function FutureEvents() {

  return (
    <>
      <Layout>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-main mb-10">Eventos futuros</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-5 ">
          <FutureEventCard />
          <FutureEventCard />
          <FutureEventCard />
          <FutureEventCard />
          <FutureEventCard />
          <FutureEventCard />
          <FutureEventCard />
        </div>
      </Layout>
    </>
  )
}

export default FutureEvents
