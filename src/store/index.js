import { createStore } from 'redux'

const INITAL_STATE = {
  search_term: "",
  images: [],
  loading: false,
  page: 1,
  tag:false 
}

function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'SET_RESULT':
      return { ...state, ...action }
    case 'LOADING':
      return { ...state, loading: true }
    case 'INCREMENT_PAGE':
      return { ...state, page: state.page + 1}
    case 'CLEAR_RESULT':
      return { ...state, images: [] }
    case 'TAG':
      return { ...state, tag: action.tag}
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;