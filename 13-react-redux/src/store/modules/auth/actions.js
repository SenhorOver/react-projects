import { createAction } from '@reduxjs/toolkit';
import * as types from '../types';

export const loginRequest = createAction(types.LOGIN_REQUEST);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginFailure = createAction(types.LOGIN_FAILURE);

export const registerRequest = createAction(types.REGISTER_REQUEST);
export const registerUpdatedSuccess = createAction(
  types.REGISTER_UPDATED_SUCCESS
);
export const registerCreatedSuccess = createAction(
  types.REGISTER_CREATED_SUCCESS
);
export const registerFailure = createAction(types.REGISTER_FAILURE);
