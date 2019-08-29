import React from "react";
import { createStore } from "redux";

const getReducer = obj => {
  return (state, action) => {
    const reg = RegExp("@@redux/INIT");
    if (reg.test(action.type)) {
      return obj.defaultState;
    } else {
      return Object.assign({}, state, obj.actions[action.type](action));
    }
  };
};

const defaultStateAndActions = {
  defaultState: {
    name: "zahng",
    age: 20
  },
  actions: {
    changeName(action) {
      return {
        name: action.name
      };
    },
    changeAge(action) {
      return {
        name: action.age
      };
    }
  }
};

const store = createStore(getReducer(defaultStateAndActions));

React.store = store;
