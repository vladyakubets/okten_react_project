import {AxiosService} from "./axios.service";
import {urls} from "../configs";

export const EpisodeService =
    {
        getByPage: (page) => AxiosService.get(`${urls.episodes}?page=${page}`).then(value => value.data),
        getCharacterById: (id) => AxiosService.get(`${urls.character}/${id}`).then(value => value.data)
    }