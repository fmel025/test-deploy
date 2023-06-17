import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="913010151609-no9j9bocvr58a9mb7k9ds24ceod9ui45.apps.googleusercontent.com">
  <React.StrictMode>
      <App/>
  </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
