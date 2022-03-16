import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

export default configureStore({
  reducer: {
    form: formSlice,
  },
});
