
import TierCard from "../../components/Cards/TierCard"
import Layout from "../../components/Navigation/Layout/Layout"
import EventDetailControl from "../../components/Buttons/ButtonGroup/EventDetailControl"
import DateTimeCard from "../../components/Cards/DateTimeCard"
import AddressCard from "./AddressCard"
import DurationEventCard from "../../components/Cards/DurationEventCard"
import AviableTickets from "../../components/Cards/AviableTickets"
import { IconUserStar, IconCoin } from "@tabler/icons-react"


function EventDetails() {

  return (
    <>
      <Layout>
        <figure className='relative m-3 h-96 w-full'>
          <img className='object-cover w-full h-full grayscale rounded-lg' src='https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
        </figure>
        <div className="bg-white flex flex-col gap-3 h-auto w-10/12 rounded-lg shadow-lg p-8 m-10 ">
          <h1 className="text-5xl font-bold mb-2">Titulo del evento</h1>
          <h2 className="text-3xl">¿Donde y cuando?</h2>
          <div className="flex flex-wrap gap-10">
            {/* Aca les pasaremos sus datos correspondientes mediante props */}
            <DateTimeCard />
            <AddressCard />
          </div>
          <h2 className="text-3xl">Acerca del evento</h2>
          <div className="flex flex-wrap gap-7">
            <DurationEventCard />
            <AviableTickets />
          </div>
          <p>Categorias</p>
          {/*Categories cards*/}
          <div className="flex flex-wrap gap-5">
            <div className="bg-slate-200 p-1 rounded">
              <p>Electronica</p>
            </div>
            <div className="bg-slate-200 p-1 rounded">
              <p>Aire Libre</p>
            </div>
            <div className="bg-slate-200 p-1 rounded">
              <p>Concierto</p>
            </div>
          </div>
          <p>Organizadores</p>
          <div className="flex flex-wrap gap-5">
            <div className="bg-slate-50 p-1 rounded shadow">
              <IconUserStar />
              <p>TWO SHOW PRODUCCIONES</p>
            </div>
            <div className="bg-slate-50 p-1 rounded shadow-sm">
              <IconUserStar />
              <p>Connecta B2B</p>
            </div>
          </div>
          <p>Patrocinadores</p>
          <div className="flex flex-wrap gap-5">
            <div className="bg-yellow-50 p-1 rounded shadow">
              <IconCoin />
              <p>Eclat Solutions</p>
            </div>
          </div>
        </div>
        <div className="divider w-11/12"></div>
        <h1 className="text-3xl lg:text-5xl font-bo mt-2 mb-5">Tickets en venta</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-5 ">
          <TierCard />
          <TierCard />
          <TierCard />
          <TierCard />
        </div>
        <div className="divider w-11/12"></div>
        <h1 className="text-3xl lg:text-5xl font-semibold mt-2 mb-5">Panel de control</h1>
        <EventDetailControl />
      </Layout>
    </>
  )
}

export default EventDetails
