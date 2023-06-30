import { IconCalendarEvent } from "@tabler/icons-react"

function DateTimeCard() {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="bg-slate-200 p-1 rounded">
                <IconCalendarEvent className="text-blue-700" />
            </div>
            <div className="flex flex-col">
                <p className="font-bold">Fecha y hora</p>
                <p className="font-light text-gray-500 text-sm">mar., 4 de jul. de 2023 7:30 - 18:00 CST</p>
            </div>
        </div>
    )
}

export default DateTimeCard