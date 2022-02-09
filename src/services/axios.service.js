import axios from 'axios';
import {baseURL} from '../configs';

const API_KEY = process.env.REACT_APP_API_KEY;

export const AxiosService = axios.create({baseURL: baseURL, params: {api_key: API_KEY}})