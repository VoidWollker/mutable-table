import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './tableReduser'

export const store = configureStore({
    reducer:{
        table: tableReducer
    }
})