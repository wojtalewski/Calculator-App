import { useContext } from 'react'
import useKeyPress from '../../hooks/useKeyPress'
import CalculatorContext from '../../context/CalculatorContext'
import dispatchAction from '../../context/calculatorActions'

const WideKey = ({ children, reset, equals, value }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const handlePress = () => {
    return dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  useKeyPress(value, handlePress)

  const handleClick = (value) => {
    dispatchAction(currentValue, prevValue, action, value, dispatch)
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
