import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


export const getAllData = createAsyncThunk('data/getAllData',async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    console.log(data);
    return data

})

const initialState = {
    data:[],
    filter:'all'
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{setFilter(state,action){state.filter = action.payload}},
    extraReducers:(builder)=>{builder.addCase(getAllData.fulfilled,(state,action)=>{state.data = action.payload})}
})


export const selectedFilter = (state)=>{
    const {data,filter} = state.data

    if (filter === 'men') {
        return data.filter((event) => event.category === 'men\'s clothing');
      }

      if (filter === 'women') {
        return data.filter((event) => event.category === 'women\'s clothing');
      }

      if (filter === 'jewelery') {
        return data.filter((event) => event.category === 'jewelery');
      }
      
      if (filter === 'electronics') {
        return data.filter((event) => event.category === 'electronics');
      }
      return data
}



export const {setFilter} = dataSlice.actions
export default dataSlice.reducer