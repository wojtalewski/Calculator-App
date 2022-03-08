import { useContext } from 'react'
import useKeyPress from '../../hooks/useKeyPress'
import useIsKeyPressed from '../../hooks/useIsKeyPressed'
import CalculatorContext from '../../context/CalculatorContext'
import dispatchAction from '../../context/calculatorActions'

interface Props {
  del?: string
  value: string
  disabled?: boolean
}

const Key: React.FC<Props> = ({ children, del, value, disabled }) => {
  const { theme, dispatch, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  const { keyPressed, targetKey } = useIsKeyPressed(value)

  const btnClass = `key key-${theme} key-${theme}-${del}`
  const newBtnClass = `key key-${theme} key-${theme}-${del} keys-${theme}-active`

  const handlePress = () => {
    return dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  useKeyPress(value, handlePress)

  const handleClick = (value: string) => {
    dispatchAction(currentValue, prevValue, action, value, dispatch)
  }

  return (
    <button
      className={keyPressed && targetKey === value ? newBtnClass : btnClass}
      onClick={() => handleClick(value)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Key
