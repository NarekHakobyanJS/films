import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { genresAPI } from "../api";

import type { IGenre, IGenresStateType } from "../types";

export const getGenres = createAsyncThunk<Array<IGenre>>(
    'getGenres',
    async () => {
        const resposne = await genresAPI.getGenres()

        return resposne.data.genres
    }
)


const initialState : IGenresStateType = {
    genres: []
}

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getGenres.fulfilled, (state, action : PayloadAction<Array<IGenre>>) => {
            state.genres = action.payload;
        })
    }
})


export default genreSlice.reducer