import React, { createContext, useReducer } from 'react'
import calculatorReducer from './calculatorReducer'
import { Action } from './calculatorReducer'

const theme = localStorage.getItem('theme')

const initialState = {
  currentValue: '',
  prevValue: '',
  action: '',
  theme: theme || 'theme-one',
  disabled: false,
  dispatch: () => {},
}

export interface InitialState {
  currentValue: string
  prevValue: string
  action: string
  theme: string
  disabled: boolean
  dispatch: React.Dispatch<Action>
}

const CalculatorContext = createContext<InitialState>(initialState)

export const CalculatorProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)
  return (
    <CalculatorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContext
