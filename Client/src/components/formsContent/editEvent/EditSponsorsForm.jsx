import React from "react"
import Layout from "../../Navigation/Layout/Layout"
import ImprovedNavbar from "../../Navigation/Navbar/ImprovedNavbar"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IconEdit, IconTrash } from "@tabler/icons-react";


function EditSponsorsForm() {

    const navigate = useNavigate();
    const [sponsorValue, setSponsorValue] = React.useState('');
    const [sponsors, setSponsors] = React.useState([]);

    const handleEdit = (sponsor) => {
        Swal.fire({
            title: 'Editar patrocinador:',
            input: 'text',
            inputValue: sponsor,
            showCancelButton: true,
            showCloseButton: true,
            showConfirmButton: true
        }).then(result => {
            if (result.isConfirmed && result.value !== null) {
                const updatedSponsors = sponsors.map(item => item === sponsor ? result.value : item);
                setSponsors(updatedSponsors);
            }
        });
    }

    const handleSponsorChange = (e) => {
        setSponsorValue(e.target.value);
    }

    const addSponsor = () => {
        if (sponsorValue.trim() === '') return;
        setSponsors((prevSponsors) => [
            ...prevSponsors,
            sponsorValue.trim(),
        ]);
        setSponsorValue('');
    }

    const removeSponsor = (sponsorToRemove) => {
        setSponsors((prevSponsors) =>
            prevSponsors.filter((sponsor) => sponsor !== sponsorToRemove)
        );
    };



    return (
        <Layout>
            <div className=''>
                <div className='flex flex-col items-start bg-white p-10 rounded'>
                    <label className='label'>
                        <span className='label-text text-xl text-center font-bold'>Editar patrocinadores</span>
                    </label>
                    <div className="join join-vertical md:join-horizontal w-full">
                        <input className="input input-sm bg-slate-200 w-full input-bordered join-item"
                            placeholder="Patrocinador"
                            value={sponsorValue}
                            onChange={handleSponsorChange} />
                        <button
                            className="btn btn-sm join-item"
                            onClick={addSponsor}
                        >
                            Agregar
                        </button>
                    </div>
                    <div className="mt-2 gap-2 flex flex-col items-start">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor} className="border bg-slate-100 flex w-48 md:w-72 join">
                                <span className="w-full text-start ml-3 text-sm text-slate-600 font-semibold my-auto px-2 join-item">{sponsor}</span>
                                    <button
                                        className="btn btn-sm btn-success btn-square join-item"
                                        onClick={() => handleEdit(sponsor)}
                                    >
                                        <IconEdit/>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error btn-square join-item"
                                        onClick={() => removeSponsor(sponsor)}
                                    >
                                        <IconTrash/>
                                    </button>
                            </div>
                        ))}
                    </div>
                    <div className='join mt-5'>
                        <button className='btn join-item font-bold'
                            onClick={() => navigate('/employeeeventdetails')}>
                            Guardar
                        </button>
                        <button className='btn  join-item font-bold'
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

export default EditSponsorsForm