// state argument is not application state
// only the state this reducer is responsible for
// state = null means if a state comes in with no info set state to null
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
