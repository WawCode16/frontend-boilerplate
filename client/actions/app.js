import {createAction} from 'redux-actions'

const changeQueryLabel = createAction('CHANGE_QUERY_LABEL')
const setData = createAction('SET_DATA')
const setLoading = createAction('SET_LOADING')

export const performQuery = (query) => (dispatch, state) => {
  dispatch(changeQueryLabel(query))
  dispatch(setLoading(true))
  dispatch(setData({
    scores: {
      subscores: []
    }
  }))

  fetch('http://94.177.240.144:9999/stats?addr=' + encodeURI(query.replace(' ', '+'))).then(result => {
    console.log(result.json().then(data=> {
      let subscores = Object.keys(data.stats).map(key => {
        let v = data.stats[key];
        return {
          category: key,
          score: v.average_from_five,
          inRadius: v.places_in_radius,
          radius: v.radius,
          nearestDistance: v.closest
        }
      })
      dispatch(setData({
        scores: {
          totalScore: subscores.reduce((sum, score)=> sum + score.score, 0) / subscores.length,
          subscores: subscores
        }
      }))
    }));
  })
  /*setTimeout(() => {
    dispatch(setData({
      scores: {
        totalScore: 7,
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
  }, 1000)*/
}