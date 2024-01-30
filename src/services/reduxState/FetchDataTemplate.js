import axios from 'axios'
import {URL_REQUESTS} from './../../utils/Constants'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loadingStatus: false,
    data: [],
    error: null,
}

//create a common helper function for fetching data for all API requests
export const fetchJsonData = createAsyncThunk('data/fetchPosts', async () => {
    await axios.get(URL_REQUESTS.POSTS_URL)
        .then(response => {
            console.log('Request Response : ' + response.data);
        })
        .catch( error => {
            console.log('caught error : ', error);
        })
})

const postsDataSlice = createSlice({
    name: 'postSlice',
    initialState,
    // reducers: {
    //     //add funcitonality here if needed
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJsonData.pending, (state) => {
                state.loadingStatus = true;
            })
            .addCase(fetchJsonData.fulfilled, (state, action) => {
                state.loadingStatus = false;
                state.data = action.payload;
            })
            .addCase(fetchJsonData.rejected, (state, action) => {
                state.loadingStatus = false;
                state.error = action.error.message;
            })
    }
})

export default postsDataSlice.reducer;