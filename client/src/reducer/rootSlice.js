/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false
    },

    reducers: {
        showloading: (state, action) => {
            state.loading = true
        },

        hideloading:  (state, action) => {
            state.loading = false;
        },

        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload
        },

        ReloadData: (state, action) => {
            state.reloadData = action.payload
        }
    }
});

export default rootSlice.reducer;

export const { showloading, hideloading, SetPortfolioData, ReloadData } = rootSlice.actions;