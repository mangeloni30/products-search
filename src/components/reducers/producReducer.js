export const productReducer = (state=[], action) => {
  switch (action.type) {
    case 'ALGO':
      return action.payload;
    default:
      return state
  }
}