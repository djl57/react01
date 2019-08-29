import React from "react";
import { createStore } from "redux";

const getReducer = obj => {
  return (state, action) => {
    const reg = RegExp("@@redux/INIT");
    if (reg.test(action.type)) {
      //默认状态下的action.type包含@@redux/INIT
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

//将store注册到React上，这样就可以在任何组件通过React.store访问了
React.store = store;
