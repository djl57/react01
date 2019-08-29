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
    age: 18,
  },
  actions: {
    changeAge(action) {
      return {
        age: action.age
      };
    },
  }
};

export default getReducer(defaultStateAndActions)