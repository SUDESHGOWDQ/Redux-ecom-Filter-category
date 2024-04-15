import {configureStore} from '@reduxjs/toolkit'
import dataSlice from '../features/dataSlice'

export const store = configureStore({
    reducer:{
        data:dataSlice
    }
})