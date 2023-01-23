import { configureStore } from '@reduxjs/toolkit';
import { valueSlise } from './slice';

export const store = configureStore({
    reducer: {
        value: valueSlise.reducer,
    }
})