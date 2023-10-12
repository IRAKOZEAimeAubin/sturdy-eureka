import { createSlice } from '@reduxjs/toolkit';
import * as cakeActions from '../cake/cakeSlice';

const initialState = {
    numOfIceCreams: 20
};

const iceCreamSlice = createSlice( {
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: ( state, action ) => {
            state.numOfIceCreams -= action.payload;
        },
        restocked: ( state, action ) => {
            state.numOfIceCreams += action.payload;
        }
    },
    // extraReducers: {
    //     [ 'cake/ordered' ]: (state) => {
    //         state.numOfIceCreams--;
    //     }
    // }
    extraReducers: ( builder ) => {
        builder.addCase( cakeActions.ordered, ( state ) => {
            state.numOfIceCreams--;
        } );
    }
} );

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
