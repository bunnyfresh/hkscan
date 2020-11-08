import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../features/urls/urlsSlice';

export default configureStore({
  reducer: {
    urls: urlReducer,
  },
});
