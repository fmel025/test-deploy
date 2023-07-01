import ActiveTicket from "../../Cards/ActiveTicket"

function ActiveTickets() {
  return (
    <div className='flex flex-col gap-5'>
        <ActiveTicket/>
        <ActiveTicket/>
        <ActiveTicket/>
        <ActiveTicket/>
    </div>
  )
}

export default ActiveTickets