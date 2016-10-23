import {createAction} from 'redux-actions'

const changeQueryLabel = createAction('CHANGE_QUERY_LABEL')
const setData = createAction('SET_DATA')
const setLoading = createAction('SET_LOADING')

export const performQuery = (query) => (dispatch, state) => {
  dispatch(changeQueryLabel(query))
  dispatch(setLoading(true))
  setTimeout(() => {
    dispatch(setData({
      scores: {
        totalScore: 7,
        maxScore: 10,
        subscores: [{
          category: 'education',
          score: 7,
          inRadius: 3,
          radius: 5,
          nearestDistance: 345
        }, {
          category: 'dining',
          score: 9,
          inRadius: 4,
          radius: 5,
          nearestDistance: 100
        }, {
          category: 'green-areas',
          score: 5,
          inRadius: 5,
          radius: 5,
          nearestDistance: 550
        }, {
          category: 'transportation',
          score: 7,
          inRadius: 3,
          radius: 5,
          nearestDistance: 440
        }, {
          category: 'banks',
          score: 9,
          inRadius: 4,
          radius: 5,
          nearestDistance: 100
        }, {
          category: 'disabled',
          score: 10,
          inRadius: 10,
          radius: 5,
          nearestDistance: 100
        }
        ]
      }
    }))
    dispatch(setLoading(false))
  }, 1000)
}