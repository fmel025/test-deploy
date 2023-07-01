import ExpiredTicket from "../../Cards/ExpiredTicket"

function ExpiredTickets() {
  return (
    <div className='flex flex-col gap-5'>
        <ExpiredTicket/>
        <ExpiredTicket/>
        <ExpiredTicket/>
        <ExpiredTicket/>
    </div>
  )
}

export default ExpiredTickets