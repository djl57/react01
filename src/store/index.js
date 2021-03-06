import React from "react";
import { createStore } from "redux";

const getReducer = obj => {
  return (state, action) => {
    const reg = RegExp("@@redux/");
    if (reg.test(action.type)) {
      return obj.defaultState;
    } else {
      return Object.assign({}, state, obj.actions[action.type](action));
    }
  };
};

const defaultStateAndActions = {
  defaultState: {
    curNavIdx: 0
  },
  actions: {
    changeCurNavIdx(action) {
      console.log(action)
      return {
        curNavIdx: action.curNavIdx
      };
    }
  }
};

const store = createStore(getReducer(defaultStateAndActions));
React.store = store;
