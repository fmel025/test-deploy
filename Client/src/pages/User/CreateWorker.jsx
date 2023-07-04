import Layout from '../../components/Navigation/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import WorkerImage from '../../assets/worker.jpg'

function CreateWorker() {

    const navigate = useNavigate();
    return (
        <Layout>
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <form
                    className="flex flex-col justify-center p-8 md:p-14"
                >
                    <span className="mb-3 text-3xl md:text-4xl font-bold">
                        Crear trabajador
                    </span>
                    <div className="py-4">
                        <label htmlFor="user" className="mb-2 text-md">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            name="user"
                            id="user"
                            placeholder="First Name Last Name"
                            required
                            onClick={() => navigate('/private/newworker')}
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="email" className="mb-2 text-md">
                            Correo Electronico
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            required
                            onClick={() => navigate('/private/newworker')}
                        />
                    </div>
                    <div className='join'>
                        <button
                            className="btn join-item text-sm p-2 mb-6"
                            type="submit"
                        >
                            Create worker
                        </button>
                        <button className='btn join-item text-sm bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>
                            Cancel
                        </button>
                    </div>
                </form>
                <div className="relative">
                    <img
                        src={WorkerImage}
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
                </div>
            </div>
        </Layout>
    )
}

export default CreateWorker






