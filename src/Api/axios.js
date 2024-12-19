import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:5001/clone-92713/us-central1/payment",
});

export{axiosInstance};