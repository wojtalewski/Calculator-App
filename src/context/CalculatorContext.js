import { createContext, useReducer } from 'react'
import calculatorReducer from './calculatorReducer'

const CalculatorContext = createContext()

export const CalculatorProvider = ({ children }) => {
  const theme = localStorage.getItem('theme')

  const initialState = {
    currentValue: '',
    prevValue: '',
    action: '',
    theme: theme || 'theme-one',
    disabled: false,
  }

  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return (
    <CalculatorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContext
