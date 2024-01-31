import { configureStore } from '@reduxjs/toolkit';
import jsonDataReducer from "./FetchDataTemplate"
//add store functionality and reducers here
// make sure to add store to react app in index.js

const store = configureStore({
    reducer: {
        template: jsonDataReducer,
    }
})

export default store;