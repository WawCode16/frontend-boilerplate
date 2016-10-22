import { createAction } from 'redux-actions'

const changeQueryLabel = createAction('CHANGE_QUERY_LABEL')
const setData = createAction('SET_DATA')
const setLoading = createAction('SET_LOADING')

export const performQuery = (query) => (dispatch, state) => {
  dispatch(changeQueryLabel(query))
  dispatch(setLoading(true))
  setTimeout(() => {
    dispatch(setData({'result': 'MOCK'}))
    dispatch(setLoading(false))
  }, 1000)
}