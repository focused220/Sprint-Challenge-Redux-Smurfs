import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAIL = 'ADD_SMURF';


export const getSmurfs = () => dispatch =>{
  dispatch({type: FETCH_SMURFS})
  return axios.get('http://localhost:3333/smurfs')
  .then(res => {dispatch({type:FETCH_SUCCESS, payload:res.data})})
  .catch(err => console.log(err));

}

export const addSmurf = (smurf) => dispatch =>{
  dispatch({type: ADD_SMURF})
  console.log(smurf)
  return axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {dispatch({type:ADD_SMURF, payload:smurf})})
  .catch(err => console.log(err))
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
