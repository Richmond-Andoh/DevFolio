import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
    name: "root",
    innitialState: {
        loading: false,
        portfolioData: null
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
        }
    }
});

export default rootSlice;

export const { showloading, hideloading, SetPortfolioData } = rootSlice.actions;