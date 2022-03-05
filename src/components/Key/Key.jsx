import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'
import calculate from '../../context/calculatorActions'

const Key = ({ children, del, value }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const handleClick = (value) => {
    switch (value) {
      case 'delete':
        return dispatch({ type: 'DELETE' })
      case '+':
      case '-':
      case '*':
      case '/':
        if (prevValue !== '') {
          const calculatedValue = calculate(currentValue, prevValue, action)
          dispatch({ type: 'SET_PREV_VALUE', payload: calculatedValue })
          dispatch({ type: 'SET_ACTION', payload: value })
          dispatch({ type: 'DELETE' })
        } else if (prevValue === '') {
          dispatch({ type: 'SET_PREV_VALUE', payload: currentValue })
        }

        dispatch({ type: 'SET_ACTION', payload: value })
        return dispatch({ type: 'DELETE' })
      case '0':
        if (currentValue !== '') {
          return dispatch({ type: 'SET_VALUE', payload: value })
        }
        break
      case ',':
        if (currentValue === '') {
          dispatch({ type: 'SET_VALUE', payload: '0,' })
        } else if (!currentValue.endsWith(',')) {
          dispatch({ type: 'SET_VALUE', payload: value })
        }
        break
      default:
        if (action === '=') {
          dispatch({ type: 'DELETE' })
          dispatch({ type: 'SET_ACTION', payload: '' })
        }

        return dispatch({ type: 'SET_VALUE', payload: value })
    }
  }

  return (
    <button
      className={`key key-${theme} key-${theme}-${del}`}
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  )
}

export default Key
