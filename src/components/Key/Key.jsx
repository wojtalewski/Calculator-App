import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'
import calculate from '../../context/calculatorActions'

const Key = ({ children, del, value }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const handleClick = (value) => {
    if (value === 'delete') {
      dispatch({ type: 'DELETE' })
    } else if (
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/'
    ) {
      if (currentValue.length > 0 && prevValue.length === 0) {
        dispatch({ type: 'SET_PREV_VALUE', payload: currentValue })
      } else if (currentValue.length > 0 && prevValue.length > 0) {
        const calculatedValue = calculate(currentValue, prevValue, action)
        dispatch({
          type: 'SET_PREV_VALUE',
          payload: calculatedValue,
        })
        dispatch({ type: 'DELETE' })
      }

      dispatch({ type: 'SET_ACTION', payload: value })
      dispatch({ type: 'DELETE' })
    } else if (
      currentValue.length <= 1 &&
      (currentValue[0] === '0' || currentValue.length === 0) &&
      value === '0'
    ) {
      dispatch({ type: 'CLEAR' })
    } else if (currentValue.length === 0 && value === ',') {
      dispatch({ type: 'SET_VALUE', payload: '0,' })
    } else {
      dispatch({ type: 'SET_VALUE', payload: value })
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
