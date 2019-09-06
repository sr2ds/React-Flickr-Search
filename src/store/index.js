import { createStore } from 'redux'

const INITAL_STATE = {
  search_term: "",
  images: [],
  loading: false,
  page: 1
}

function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'SET_RESULT':
      return { ...state, ...action }
    case 'LOADING':
      return { ...state, loading: true }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;