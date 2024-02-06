import { createReducer } from "@reduxjs/toolkit";

// empty object is define the intial state
export const authReducer = createReducer(
  {},
  {
    //  for loading the user initially or initial condition
    loadUserRequest: (state) => {
      state.loading = true;
    },

    // if user login sucessfully
    loadUserSucess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    // if user login failed
    loadUserFailed: (state, action) => { 
      state.loading = false;
      // state.isAuthenticated = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessege: (state) => {
      state.messege = null;
    },
  }
);
