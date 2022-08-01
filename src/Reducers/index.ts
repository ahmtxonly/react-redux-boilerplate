import { combineReducers } from '@reduxjs/toolkit';
import { AUTH, HOME } from 'Types';

import auth from './authReducer';
import home from './homeReducer';
// import auth from "Slices/authSlice";

const rootReducer = combineReducers({ [AUTH]: auth, [HOME]: home });

export default rootReducer;
