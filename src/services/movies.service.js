import {AxiosService} from "./axios.service";
import {urls} from "../configs";

export const MoviesService = {
    getByPage: (page) => AxiosService.get(urls.movies, {params: {page}}).then((value) => value.data),
    getDetails: (id) => AxiosService.get(`${urls.movie}/${id}`).then(value => value.data)
}