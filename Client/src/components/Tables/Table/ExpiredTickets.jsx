import ExpiredTicket from "../../Cards/ExpiredTicket"

function ExpiredTickets() {
  return (
    <div className='flex flex-col gap-5'>
        {/* Aca llenamos de los tickets expirados que esten relacionados con el evento
        y los renderizamos dinamicamente llenando las tarjetas y pasandole los datos mediante props */}
        <ExpiredTicket/>
        <ExpiredTicket/>
        <ExpiredTicket/>
        <ExpiredTicket/>
    </div>
  )
}

export default ExpiredTickets