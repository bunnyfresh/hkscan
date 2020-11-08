import { createSlice } from '@reduxjs/toolkit';


//get urls from Local Storage
// const LS_ACTIVITIES = JSON.parse(localStorage.getItem("urls"));

export const urlsSlice = createSlice({
  name: 'urls',
  initialState: {
    urls: ['?product=chicken&market=shop1' , '?product=pig&market=shop2' , '?product=rabbit&market=shop3'],
  },
  reducers: { 
    // add: (state, action) => { 
    //   state.urls.push(action.payload); 
    // },
  },
});

export const { add } = urlsSlice.actions;

export const selectUrls = state =>  state.urls.urls;
 
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default urlsSlice.reducer;
