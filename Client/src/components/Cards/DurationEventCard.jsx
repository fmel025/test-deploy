import { IconClock } from "@tabler/icons-react"
function DurationEventCard() {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="bg-slate-200 p-1 rounded">
                <IconClock className="text-blue-700" />
            </div>
            <div className="flex flex-col">
                <p className="">2 horas y 45 minutos</p>
            </div>
        </div>
    )
}

export default DurationEventCard