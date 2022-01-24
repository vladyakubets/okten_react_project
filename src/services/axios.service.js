import axios from "axios";
import baseURL from "../configs/urls";

export const AxiosService = axios.create({baseURL});