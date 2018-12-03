const initialState = { status: false }

export const sidedrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIDEDRAWER':
      return { status: action.status };
    default: 
      return state;
  }
}
