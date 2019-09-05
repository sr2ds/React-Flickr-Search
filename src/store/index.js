import { createStore } from 'redux'

const INITAL_STATE = {
  term: "",
  tag: false,
}

function search(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return { ...state, term: action.term, tag: false }
    case 'TAG_SEARCH' :
        return { ...state, term: "", tag: true }
    default:
      return state;
  }
}

const store = createStore(search);

export default store;