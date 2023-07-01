import ActiveTicket from "../../Cards/ActiveTicket"

function ActiveTickets() {
  return (
    <div className='flex flex-col gap-5'>
        {/* Aca se llenaran todos los tickets relacionados a los detalles de una orden
        ( Todos los tickets linkeados a un evento pues ) */}
        <ActiveTicket/>
        <ActiveTicket/>
        <ActiveTicket/>
        <ActiveTicket/>
    </div>
  )
}

export default ActiveTickets