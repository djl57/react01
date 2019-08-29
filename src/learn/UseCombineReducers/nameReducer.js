const getReducer = obj => {
  return (state, action) => {
    console.log(action)
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
    name: "zahng",
  },
  actions: {
    changeName(action) {
      return {
        name: action.name
      };
    },
  }
};

export default getReducer(defaultStateAndActions)