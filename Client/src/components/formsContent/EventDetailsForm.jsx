import React, { useState } from 'react'
import { IconTrash } from '@tabler/icons-react';

function EventDetails({ formData, setFormData, organizers, setOrganizers, categories, setCategories }) {

  const [organizerValue, setOrganizerValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  // Funciones para el manejo de multiinputs

  const handleOrganizerChange = (e) => {
    setOrganizerValue(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  }

  const addOrganizer = () => {
    if (organizerValue.trim() === '') return;
    setOrganizers((prevOrganizers) => [
      ...prevOrganizers,
      organizerValue.trim(),
    ]);
    setOrganizerValue('');
  }

  const addCategory = () => {
    if (categoryValue.trim() === '') return;
    setCategories((prevCategories) => [
      ...prevCategories,
      categoryValue.trim(),
    ]);
    setCategoryValue('');
  }

  const removeOrganizer = (organizerToRemove) => {
    setOrganizers((prevOrganizers) =>
      prevOrganizers.filter((organizer) => organizer !== organizerToRemove)
    );
  };

  const removeCategory = (categoryToRemove) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToRemove)
    );
  }

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
      <label className='label'>
        <span className='label-text text-md font-bold'>Organizadores:</span>
      </label>
      <div className='flex flex-col items-start'>
        <div className="join">
          <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
            placeholder="Organizador"
            value={organizerValue}
            onChange={handleOrganizerChange} />
          <button
            className="btn btn-sm join-item md:btn-wide"
            onClick={addOrganizer}>Añadir organizador</button>
        </div>
        <div className="mt-2 gap-2 flex flex-col items-start">
          {organizers.map((organizador) => (
            <div key={organizador} className="border bg-slate-100 flex w-72 join">
              <p className='w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item'>{organizador}</p>
              <button
                className="my-auto text-white text-sm btn btn-sm btn-square btn-error join-item"
                onClick={() => removeOrganizer(organizador)}
              >
                <IconTrash/>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <label className='label'>
          <span className='label-text text-md font-bold'>Categorias:</span>
        </label>
        <div className="join">
          <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
            placeholder="Categoria"
            value={categoryValue}
            onChange={handleCategoryChange} />
          <button 
          className="btn btn-sm join-item btn-wide"
          onClick={addCategory}>Añadir Categoria</button>
        </div>
        <div className="mt-2 gap-2 flex flex-col items-start">
          {categories.map((category) => (
            <div key={category} className="border bg-slate-100 flex w-72 join">
              <p className='w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item'>{category}</p>
              <button
                className="btn btn-sm btn-square btn-error join-item"
                onClick={() => removeCategory(category)}
              >
                <IconTrash className='my-auto text-white text-sm'/>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EventDetails