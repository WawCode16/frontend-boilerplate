const initialState = [{
  query: '',
  loading: false,
  data: null
}]

export default (state=initialState, action) => {
  switch(action.type) {
    case 'CHANGE_QUERY_LABEL':
      return {...state, query: action.payload}
    case 'SET_LOADING':
      return {...state, loading: action.payload}
    case 'SET_DATA':
      return {...state, data: action.payload}
    default:
      return state
  }
}

export const querySelector = state => state.query
export const dataSelector = state => state.data
export const isLoading = state => state.loading
