import axios from "axios";

const requestAxios = axios.create({
    baseURL: import.meta.env.VITE_DB
})

export default requestAxios