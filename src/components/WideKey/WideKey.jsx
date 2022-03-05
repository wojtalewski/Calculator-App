import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'
import calculate from '../../context/calculatorActions'

const WideKey = ({ children, reset, equals, value }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const handleClick = (value) => {
    if (value === 'reset') {
      dispatch({ type: 'CLEAR' })
    } else if (value === 'equals' && prevValue !== '') {
      const calculatedValue = calculate(currentValue, prevValue, action)
      dispatch({ type: 'CLEAR' })
      dispatch({
        type: 'SET_VALUE',
        payload: calculatedValue,
      })
      dispatch({ type: 'SET_PREV_VALUE', payload: '' })
      dispatch({ type: 'SET_ACTION', payload: '=' })
    }
  }

  return (
    <button
      className={`wide-key wide-key-${theme} wide-key-${theme}-${reset} wide-key-${theme}-${equals}`}
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  )
}

export default WideKey
