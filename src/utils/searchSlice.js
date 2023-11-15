import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "cache",
  initialState: {
    searchSuggestions: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.searchSuggestions = {
        ...state.searchSuggestions,
        ...action.payload,
      };
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
