import { createSlice } from "@reduxjs/toolkit";

export const colors = ["red", "blue", "green", "yellow", "purple"];
export const statuses = ["all", "completed", "incompleted"];

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    color: "",
    status: "all",
  },
  reducers: {
    filterColor(state, action) {
      if (state.color === action.payload) {
        state.color = "";
      } else {
        state.color = action.payload;
      }
    },
    filterStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { filterColor, filterStatus } = filterSlice.actions;

export default filterSlice.reducer;

export const selectColor = (state) => state.filter.color;
export const selectStatus = (state) => state.filter.status;
