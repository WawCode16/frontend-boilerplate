import {browserHistory} from "react-router";
import {performQuery} from "./app";

export const makeQuery = query => dispatch => {
  browserHistory.push('/results')
  dispatch(performQuery(query))
}