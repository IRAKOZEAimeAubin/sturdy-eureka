import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import userReducer from '../features/user/userSlice';
import * as reduxLogger from 'redux-logger';

const store = configureStore( {
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( reduxLogger.createLogger() )
} );

export default store;