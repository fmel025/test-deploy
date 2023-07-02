import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "../src/context/AuthContext";
import AppRoutes from "./routes";


function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="988130177374-4rhnbeevlas2772hvnuasoq8fjgqlcbp.apps.googleusercontent.com">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
