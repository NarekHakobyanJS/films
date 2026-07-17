import { APIConfig } from "../../../shared/apiConfig";
import type { IGetGenresResposneType } from "../types";

class GenresAPI extends APIConfig {
    async getGenres(){
        return this.axiosCreate()
        .get<IGetGenresResposneType>(`/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
    }
}

export const genresAPI = new GenresAPI();