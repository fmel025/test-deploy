
function EditEventDetailsForm({ formData, setFormData }) {
    return (
        <div className="mt-2 rounded w-11/12 sm:w-5/6 lg:w-3/5 flex-col justify-center p-10 mx-auto bg-white gap-5">
            <label className='label'>
                <span className='label-text text-md font-bold'>Nombre del evento:</span>
            </label>
            <input
                type='text'
                className='input input-bordered input-sm bg-slate-200 w-full'
                placeholder='Evento'
                value={formData.eventName}
                onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
            ></input>
            <label className='label'>
                <span className='label-text text-md font-bold'>Descripcion del evento:</span>
            </label>
            <input
                type='text'
                className='textarea textarea-bordered textarea-sm bg-slate-200 w-full'
                placeholder='Descripcion detallada'
                value={formData.eventDescription}
                onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}></input>
        </div>
    )
}

export default EditEventDetailsForm