export const addEventsReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'ADDEVENTS':
      return action.events
    default: 
      return state
  }
}