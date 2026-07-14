import { configureStore } from "@reduxjs/toolkit";
import genresSlice from '../../entities/genre/model'
const store = configureStore({
    reducer : {
        genresData : genresSlice
    }
})

export default store;