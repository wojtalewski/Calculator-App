import { useContext } from 'react'
import useKeyPress from '../../hooks/useKeyPress'
import useIsKeyPressed from '../../hooks/useIsKeyPressed'
import CalculatorContext from '../../context/CalculatorContext'
import dispatchAction from '../../context/calculatorActions'

const WideKey = ({ children, reset, equals, value }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const { keyPressed, targetKey } = useIsKeyPressed(value)

  const wideBtnClass = `wide-key wide-key-${theme} wide-key-${theme}-${reset} wide-key-${theme}-${equals}`
  const newWideBtnClass = `wide-key wide-key-${theme} wide-key-${theme}-${reset} wide-key-${theme}-${equals} wide-key-${theme}-active wide-key-${theme}-${equals}-active`

  const handlePress = () => {
    return dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  useKeyPress(value, handlePress)

  const handleClick = (value) => {
    dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  return (
    <button
      className={
        keyPressed && targetKey === value ? newWideBtnClass : wideBtnClass
      }
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  )
}

export default WideKey
