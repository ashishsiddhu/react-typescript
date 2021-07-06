import React, { useReducer, Dispatch } from "react";
import CounterChild from "./CounterChild";
type State = {
  value: number,
  origin: string
};

const initialCounterState: State = {
  value: 0,
  origin: ""
}
enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
  Clear = 'CLEAR',
}

type Action = {
  type: ActionKind,
  payload?: number,
  origin: string
}

const increaseAction = (data: string): Action => {
  return ({
    type: ActionKind.Increase,
    payload: 1,
    origin: data
  })
}

const decreaseAction = (data: string): Action => {
  return ({
    type: ActionKind.Decrease,
    payload: 1,
    origin: data
  }
  )
}
const clearAction = (data: string): Action =>{
  return ({
    type: ActionKind.Clear,
    origin: data
  })
}
const Counter: React.FC = () => {
    // When using hook,
    // we get access to 2 values:
    // - a current state,
    // - and a dispatch function.
    const [
      state, 
      dispatch
    // useReducer takes 2 parameters:
    // - the state reducer,
    // - and an initial state.
    ] = useReducer(counterReducer, initialCounterState);
    return (
      <div>
        <div className="row">
          <button className="button asyncButton" onClick={() => dispatch(decreaseAction("Dec"))}>
            Decrease
          </button>
          <span className="counter">
            {state.value}
          </span>
          <button className="button asyncButton" onClick={() => dispatch(increaseAction("Inc"))}>
            Increase
          </button>
        </div>
        Button Pressed: {state.origin}
        <button className="button asyncButton" onClick={() => dispatch(clearAction("Clear"))}>
          Clear
        </button>
        {/* <TodosDispatch.Provider value={dispatch}>
          <CounterChild count={state.value}/>
        </TodosDispatch.Provider> */}
      </div>
    );
}

function counterReducer(state: State, action: Action): State {
  const {type, payload} = action;
  
  // First, we figure out what action
  // has been fired:
  switch (type) {
     
    // Then, for each action
    // we describe an according state update.
    // For example, for increasing action
    // we add the number from payload
    // to the current value:
    case ActionKind.Increase:
	  return {
        ...state, 
        value: state.value + (action.payload || 1),
        origin: action.origin
      }
    
    // For decreasing action,
    // we subtract the payload number
    // from the current value:
    case ActionKind.Decrease:
      return {
        ...state, 
        value: state.value - (action.payload || 1),
        origin: action.origin
      }
    case ActionKind.Clear:
      return {
        ...state, 
        value: 0,
        origin: action.origin
      }
  
    // If the action is unknown
    // we return the current state:
    default:
      return state;
  }
}

export default Counter;