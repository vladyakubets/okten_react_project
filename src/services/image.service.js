import {axiosService} from "./axios.service";

export const imageService ={
    getByTag: (tag) => axiosService.get(`/${tag}`).then(value => value.request.responseURL)
 }