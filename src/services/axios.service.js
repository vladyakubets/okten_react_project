import axios from "axios";
import baseURL from "../configs/urls";

const AxiosService = axios.create({baseURL})

export default AxiosService;