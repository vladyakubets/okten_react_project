import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const carService ={
    getAll: () => axiosService.carsAxiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.carsAxiosService.post(urls.cars, car).then(value => value.data),
    update: (id, car)=>axiosService.carsAxiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    delete: (carId) => axiosService.carsAxiosService.delete(`${urls.cars}/${carId}`)
}