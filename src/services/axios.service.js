import axios from "axios";
import {API_KEY, baseURL} from "../configs";

export const AxiosService = axios.create({baseURL: baseURL, params: {api_key: API_KEY}})