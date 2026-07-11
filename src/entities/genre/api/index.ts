import { APIConfig } from "../../../shared/apiConfig";
import type {IGenre}  from "../types";

class GenresAPI extends APIConfig {
    async getGenres(){
        return this.axiosCreate()
        .get<Array<IGenre>>(`/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
    }
}

export const genresAPI = new GenresAPI();