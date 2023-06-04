import {createStore} from "redux";
function reducer(state={name:"fedi grichi"},action){
 switch(action.type == "fedi"){
    case "happy":
     return{..state ,ishappy:true];
   default:
  return state;
   }
 }

const store = createStore(reducer);
