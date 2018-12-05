const initialState = 
  { currentUser: null,
    authenticated: false
  }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {currentUser: action.user, authenticated: true}
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}