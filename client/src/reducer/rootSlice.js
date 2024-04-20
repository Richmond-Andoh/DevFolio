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
    }
})