import { InitialState } from './CalculatorContext'

export type Action =
  | { type: 'SET_VALUE'; payload: string }
  | { type: 'SET_PREV_VALUE'; payload: string }
  | { type: 'SET_ACTION'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'CLEAR' }
  | { type: 'SET_THEME'; payload: string }
  | { type: 'SET_DISABLED'; payload: boolean }

const calculatorReducer = (
  state: InitialState,
  action: Action
): InitialState => {
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
    case 'SET_DISABLED':
      return {
        ...state,
        disabled: action.payload,
      }
    default:
      return state
  }
}

export default calculatorReducer
