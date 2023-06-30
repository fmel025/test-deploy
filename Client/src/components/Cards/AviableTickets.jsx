import { IconTicket } from "@tabler/icons-react"
function AviableTickets() {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="bg-slate-200 p-1 rounded">
                <IconTicket className="text-blue-700" />
            </div>
            <div className="flex flex-col">
                <p className="">40 cupos</p>
            </div>
        </div>
    )
}

export default AviableTickets