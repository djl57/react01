import React from "react";
import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
const store = createStore(reducer);

// 使用
console.log(store.getState().nameReducer.name)
console.log(store.getState().ageReducer.age)

React.store = store;
