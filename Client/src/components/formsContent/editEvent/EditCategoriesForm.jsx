import React from 'react'
import { IconTrash, IconEdit } from '@tabler/icons-react'
import Layout from '../../Navigation/Layout/Layout'
import ImprovedNavbar from '../../Navigation/Navbar/ImprovedNavbar'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditCategoriesForm() {

    const navigate = useNavigate();

    const [categoryValue, setCategoryValue] = React.useState('');
    const [categories, setCategories] = React.useState([]);

    const handleEdit = (category) => {
        Swal.fire({
            title: 'Editar organizador:',
            input: 'text',
            inputValue: category,
            showCancelButton: true,
            showCloseButton: true,
            showConfirmButton: true
        }).then(result => {
            if (result.isConfirmed && result.value !== null) {
                const updatedCategories = categories.map(item => item === category ? result.value : item);
                setCategories(updatedCategories);
            }
        });
    }

    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
    }

    const addCategory = () => {
        if (categoryValue.trim() === '') return;
        setCategories((prevCategories) => [
            ...prevCategories,
            categoryValue.trim(),
        ]);
        setCategoryValue('');
    }

    const removeCategory = (categoryToRemove) => {
        setCategories((prevCategories) =>
            prevCategories.filter((category) => category !== categoryToRemove)
        );
    };

    return (
        <Layout>
            <div className=''>
                <div className='flex flex-col items-start bg-white p-10 rounded'>
                    <label className='label'>
                        <span className='label-text text-xl text-center font-bold'>Editar categorias</span>
                    </label>
                    <div className="join join-vertical md:join-horizontal w-full">
                        <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
                            placeholder="Categoria"
                            value={categoryValue}
                            onChange={handleCategoryChange} />
                        <button
                            className="btn btn-sm join-item md:btn-wide"
                            onClick={addCategory}>Añadir Categoria
                        </button>
                    </div>
                    <div className="mt-2 gap-2 flex flex-col items-start">
                        {categories.map((category) => (
                            <div key={category} className="border bg-slate-100 flex w-48 md:w-72 join">
                                <p className='w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item'>{category}</p>
                                <button
                                    className='btn btn-sm btn-square btn-success join-item'
                                    onClick={() => handleEdit(category)}>
                                    <IconEdit className='my-auto text-white' />
                                </button>
                                <button
                                    className="btn btn-sm btn-square bg-red-600 hover:bg-red-400 join-item"
                                    onClick={() => removeCategory(category)}
                                >
                                    <IconTrash className='my-auto text-white text-sm' />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='join mt-5'>
                        <button className='btn btn-primary join-item font-bold'
                            onClick={() => navigate('/employeeeventdetails')}>
                            Guardar
                        </button>
                        <button className='btn btn-secondary join-item font-bold'
                            onClick={() => navigate('/employeeeventdetails')}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <ImprovedNavbar />
        </Layout>
    )
}

export default EditCategoriesForm