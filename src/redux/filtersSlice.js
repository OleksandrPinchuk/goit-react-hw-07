import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        changeFilter: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;