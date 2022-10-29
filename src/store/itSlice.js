import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "it Store",
  user: [],
  loading: false,
};

export const itSlice = createSlice({
  name: "itStore",
  initialState: initialState,
  reducers: {
   
  },
});
export default itSlice.reducer;
