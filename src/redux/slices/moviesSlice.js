import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MOVIES_API_URL;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    filteredItems: [],
    status: null,
    error: null,
    searchQuery: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filteredItems = action.payload; // Initialize filteredItems with all movies
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterMovies: (state) => {
      state.filteredItems = state.items.filter(movie =>
        movie.movie.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});

export const { setSearchQuery, filterMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
