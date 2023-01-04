import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ""
}

const registerSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state, {payload}) => {
            state.name = payload;
        }
    }
})

export const { setUserName } = registerSlice.actions;
export default registerSlice.reducer;