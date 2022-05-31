import { createSlice } from '@reduxjs/toolkit';
import { IImageState } from "../interfaces";


const initialState: IImageState = {
    images: []
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        addImage: (state, { payload }) =>{
            state.images.push(payload);
        }
    }
});

export const {
    addImage
} = imageSlice.actions;

export const selectImages = (state:any) => state.image;

export default imageSlice.reducer;