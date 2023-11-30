/**
 * Dummy reducer to import in App.jsx
 */
import { createSlice } from "@reduxjs/toolkit";

let dummyObject = {id: 1}

const initialState = {
    dummyObject
}

export const dummy = createSlice({
    name: 'dummy',
    initialState,
    reducers: {
        // No reducers
    }
});