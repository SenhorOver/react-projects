import { createReducer } from '@reduxjs/toolkit';
import axios from '../../../services/axios';

import * as actions from './actions';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.loginRequest, (action) => {
      const newState = { ...action };
      newState.isLoading = true;
      return newState;
    })
    .addCase(actions.loginSuccess, (action, payload) => {
      const newState = { ...action };
      newState.isLoggedIn = true;
      newState.token = payload.payload.token;
      newState.user = payload.payload.user;
      newState.isLoading = false;
      return newState;
    })
    .addCase(actions.loginFailure, () => {
      const newState = { ...initialState };
      delete axios.defaults.headers.Authorization;
      return newState;
    })
    .addCase(actions.registerRequest, (action) => {
      const newState = { ...action };
      newState.isLoading = true;
      return newState;
    })
    .addCase(actions.registerUpdatedSuccess, (action, { payload }) => {
      const newState = { ...initialState };
      newState.isLoading = false;
      newState.token = action.token;
      newState.user = payload;
      newState.isLoggedIn = action.isLoggedIn;
      return newState;
    })
    .addCase(actions.registerCreatedSuccess, (action) => {
      const newState = { ...action };
      newState.isLoading = false;
      return newState;
    })
    .addCase(actions.registerFailure, (action) => {
      const newState = { ...action };
      newState.isLoading = false;
      return newState;
    });
});

export default loginReducer;
