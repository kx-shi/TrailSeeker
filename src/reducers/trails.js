import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userLocation = "18.0649,59.3293";

const initialState = {
    loading: false,
    trailObjects: [],
    error: '',
};

export const fetchTrails = createAsyncThunk('trails/fetchTrails', () => {
    return axios.get(`https://www.outdooractive.com/api/project/api-dev-oa/nearby/tour?location=${userLocation}&sortby=distance&radius=500000&limit=15`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            const trailIds = response.data.result.map((trail) => trail.id);
            //console.log("Repsonse from first fetch: ", trailIds)
            return axios.all(trailIds.map((id) => axios.get(`https://www.outdooractive.com/api/project/api-dev-oa/oois/${id}?key=yourtest-outdoora-ctiveapi&lang=en`)))
                .then((res) => res.map((trail) => trail.data.tour))
                .then((data) => data.flat())
        })
})

export const trails = createSlice({
    name: 'trails',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTrails.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchTrails.fulfilled, (state, action) => {
            //console.log("Payload: ", action.payload)
            state.loading = false;
            state.trailObjects = action.payload;
            state.error = '';
        })
        builder.addCase(fetchTrails.rejected, (state, action) => {
            state.loading = false;
            state.trailObjects = [];
            state.error = action.error.message;
        })
    }
});

