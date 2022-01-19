import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const carsService ={
    getAll: ()=>axiosService.get(urls.cars).then(r => r.data),
    create: (car)=> axiosService.post(urls.cars, car).then(r => r.data),
    delete: (id)=> axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}