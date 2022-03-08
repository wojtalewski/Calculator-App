import { useContext } from 'react'
import useKeyPress from '../../hooks/useKeyPress'
import useIsKeyPressed from '../../hooks/useIsKeyPressed'
import CalculatorContext from '../../context/CalculatorContext'
import dispatchAction from '../../context/calculatorActions'

interface Props {
  reset?: string
  equals?: string
  value: string
  disabled?: boolean
}

const WideKey: React.FC<Props> = ({
  children,
  reset,
  equals,
  value,
  disabled,
}) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const { keyPressed, targetKey } = useIsKeyPressed(value)

  const wideBtnClass = `wide-key wide-key-${theme} wide-key-${theme}-${reset} wide-key-${theme}-${equals}`
  const newWideBtnClass = `wide-key wide-key-${theme} wide-key-${theme}-${reset} wide-key-${theme}-${equals} wide-key-${theme}-active wide-key-${theme}-${equals}-active`

  const handlePress = () => {
    return dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  useKeyPress(value, handlePress)

  const handleClick = (value: string) => {
    dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  return (
    <button
      className={
        keyPressed && targetKey === value ? newWideBtnClass : wideBtnClass
      }
      onClick={() => handleClick(value)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default WideKey
