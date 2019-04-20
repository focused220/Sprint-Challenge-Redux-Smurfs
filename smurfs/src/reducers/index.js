import {FETCH_SMURFS, ADD_SMURF, FETCH_SUCCESS, ADD_SMURF_FAIL} from '../actions/index';

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: ''
 }

 const reducer = (state = initialState, action) => {
   switch(action.type){
     case FETCH_SMURFS:
     return{
       ...state,
       fetchingSmurfs: true,
       error: ''
     };
     case FETCH_SUCCESS:
     console.log(action.payload)
     return{
       ...state,
       smurfs: action.payload,
       fetchingSmurfs: false,
       error: ''
     };
     case ADD_SMURF:
     console.log(action.payload)
     console.log(state.smurfs)
     const newSmurf = action.payload;
     return{
       ...state,
       addingSmurf: true,
       smurfs: [...state.smurfs, action.payload],
       error: ''
     };
     default: return state;
   }
     
 }

export default reducer;
