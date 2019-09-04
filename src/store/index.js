import { createStore } from 'redux'

const INITAL_STATE = {
  data: {
    term: "",
    tag: false,
  }
}

function search(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return { ...state, data: [...state.data, action.term] }
    default:
      return state;
  }
}

const store = createStore(search);

export default store;