import axios from "axios";


class APIConfig {
    #baseUrl : string = 'https://api.themoviedb.org/3';
    protected apiKey : string = "f36f23edf6e10fd2ddcf939916b1f67a"
    protected axiosCreate(){
        return axios.create({
            baseURL : this.#baseUrl
        })
    }
}

export {APIConfig}