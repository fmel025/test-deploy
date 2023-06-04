import Layout from "../../components/Layout/Layout";
import { UimGoogle } from "@iconscout/react-unicons-monochrome";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/google.svg";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmitGoogle = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-3xl md:text-4xl font-bold">Iniciar sesion</span>
          <span className="font-light text-gray-400 mb-4">
            Bienvenido de nuevo a EventMate
          </span>
          <div className="py-4">
            <label htmlFor="email" className="mb-2 text-md">
              Email o Username
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="py-4">
            <label htmlFor="password" className="mb-2 text-md">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>

          <button
            className="w-full text-sm bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            type="button"
            onClick={handleSubmit}
          >
            Iniciar sesion
          </button>

          <div className="py-4 flex items-center justify-center">
            <div className="border-t border-gray-300 w-1/3"></div>
            <div className="mx-3 text-gray-500">O</div>
            <div className="border-t border-gray-300 w-1/3"></div>
          </div>

          <button
            className="w-full border border-gray-300 text-sm p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
            type="button"
            onClick={handleSubmitGoogle}
          >
            <img src={Logo} alt="logo" class="w-6 h-6 inline mr-2" />
            Iniciar sesion con Google
          </button>
        </form>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1684235424737-31c4f78e5aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
