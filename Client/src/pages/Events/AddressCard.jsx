import { IconMapPin } from "@tabler/icons-react"

function AddressCard() {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="bg-slate-200 p-1 rounded">
                <IconMapPin className="text-blue-700" />
            </div>
            <div className="flex flex-col">
                <p className="font-bold">Ubicacion</p>
                <p className="font-light text-gray-500 text-sm">MQM7+5VJ, Blvd. Los Proceres, contiguo a la UCA, San Salvador</p>
            </div>
        </div>
    )
}

export default AddressCard