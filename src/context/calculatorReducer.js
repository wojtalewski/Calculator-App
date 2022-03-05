const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        currentValue: state.currentValue + action.payload,
      }
    case 'SET_PREV_VALUE':
      return {
        ...state,
        prevValue: action.payload,
      }
    case 'SET_ACTION':
      return {
        ...state,
        action: action.payload,
      }
    case 'DELETE':
      return {
        ...state,
        currentValue: '',
      }
    case 'CLEAR':
      return {
        ...state,
        currentValue: '',
        prevValue: '',
        action: '',
      }
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      }

    default:
      return state
  }
}

export default calculatorReducer
