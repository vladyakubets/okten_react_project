import axios from "axios";
import {baseURL} from "../configs";

const carsAxiosService = axios.create({baseURL: baseURL.cars})
const jphAxiosService = axios.create({baseURL: baseURL.JPHolder})

export const axiosService = {
    carsAxiosService,
    jphAxiosService
}