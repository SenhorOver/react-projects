import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';

const rootReducers = combineReducers({
  auth,
});

export default rootReducers;
