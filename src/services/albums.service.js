import AxiosService from "./axios.service";

import {urls} from "../configs";

export const albumsService = {
    getPhotos: (id) => AxiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data),

}