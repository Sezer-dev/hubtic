import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../services/posts/posts.interface';

export interface PostState {
  value: IPost | [];
}

const initialState: PostState = {
  value: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = postSlice.actions;

export default postSlice.reducer;
