import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log("reducer called", action.type)
  switch (action.type) {
    case INCREMENT:
      console.log('increment reducer', action.type)
      return {
        ...state,
        count: state.count +=1
      }
    case DECREMENT:
      console.log('decrement reducer', action.type)
      return {
        ...state,
        count: state.count -=1
      }
    default:
      console.log("wut", action.type)
      return state;
  }
};
