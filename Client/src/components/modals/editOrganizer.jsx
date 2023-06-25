import React from 'react'

function editOrganizer() {
  return (
    <div className='mt-2 gap-2 flex flex-col items-start'>
    <label className='label'>
        <span className='label-text text-md font-bold'>Organizador:</span>
    </label>
    <div className='flex flex-col items-start modal-action'>
        <div className="join join-vertical w-full md:join-horizontal">
            <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
                placeholder={organizador}
                value={organizerValue}
                onChange={handleOrganizerChange} />
            <p
                className="btn btn-sm join-item md:btn-wide"
                onClick={addOrganizer}>Añadir organizador</p>
        </div>
    </div>
</div>
  )
}

export default editOrganizer