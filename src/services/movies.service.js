import {AxiosService} from './axios.service';
import {urls} from '../configs';

export const MoviesService = {
    getByPage: (page) => AxiosService.get(urls.movies, {params: {page}}).then((value) => value.data),
    getDetails: (id) => AxiosService.get(`${urls.movie}/${id}`).then(value => value.data),
    getCredits: (id) => AxiosService.get(`${urls.movie}/${id}/credits`).then(value => value.data),
    getSimilar: (id) => AxiosService.get(`${urls.movie}/${id}/similar`).then(value => value.data),
    getByGenreId: (id,page) => AxiosService.get(`${urls.movies}`,{params: {with_genres: id, page}}).then(value => value.data),
    getGenres:() => AxiosService.get(`/genre/movie/list`).then(value => value.data),
    getBySearch: (query) => AxiosService.get(urls.search, {params:{query: query}}).then(value => value.data)
}