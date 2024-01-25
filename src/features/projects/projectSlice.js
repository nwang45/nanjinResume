// src/features/projects/projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.list.push(action.payload);
    },
    // other reducers like removeProject, editProject, etc.
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
