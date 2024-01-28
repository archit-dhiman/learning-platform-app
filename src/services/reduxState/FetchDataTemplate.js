import axios from 'axios'
import {URL_REQUESTS} from './../../utils/Constants'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialStat = {
    loading: false,
    data: [],
    error: null,
}

const fetchPosts = createAsyncThunk('data/fetchPosts', async () => {
    await axios.get(URL_REQUESTS.POSTS_URL)
        .then(response => {
            data = response.data;
            console.log('Request Response : ' + response.data);
        })
        .catch( error => {
            console.log('caught error : ', error);
        })
})

const postsDataSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        //add reducers here
    }
})