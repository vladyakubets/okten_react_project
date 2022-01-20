import AxiosService from "./axios.service";

import {urls} from "../configs";

export const usersService = {
    getAll: () => AxiosService.get(urls.users).then(value => value.data),
    getById: (id) => AxiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPosts: (id) => AxiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}