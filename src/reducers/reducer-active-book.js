// state arg is not app state,
// only the passed state

export default (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}
