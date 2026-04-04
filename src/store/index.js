import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.js';
import tasksReducer from './slices/tasksSlice.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
    }
});