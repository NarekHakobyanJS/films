import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { genresAPI } from "../api";

export const getGenres = createAsyncThunk(
    'getGenres',
    async () => {
        const resposne = await genresAPI.getGenres()

        return resposne.data
    }
)

const initialState = {
    genres: []
}

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
    }
})


export default genreSlice.reducer