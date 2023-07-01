import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://ncapasapideploy-production.up.railway.app/api/v1',
    }
);

export default instance;