import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'
import Key from '../Key/Key'
import WideKey from '../WideKey/WideKey'

const Keyboard = () => {
  const { theme, dispatch } = useContext(CalculatorContext)

  return (
    <div className={`keyboard keyboard-${theme}`}>
      <Key value={'7'}>7</Key>
      <Key value={'8'}>8</Key>
      <Key value={'9'}>9</Key>
      <Key del={'del'} value={'delete'}>
        DEL
      </Key>
      <Key value={'4'}>4</Key>
      <Key value={'5'}>5</Key>
      <Key value={'6'}>6</Key>
      <Key value={'+'}>+</Key>
      <Key value={'1'}>1</Key>
      <Key value={'2'}>2</Key>
      <Key value={'3'}>3</Key>
      <Key value={'-'}>-</Key>
      <Key value={','}>.</Key>
      <Key value={'0'}>0</Key>
      <Key value={'/'}>/</Key>
      <Key value={'*'}>x</Key>
      <WideKey value={'reset'} reset={'reset'}>
        RESET
      </WideKey>
      <WideKey value={'equals'} equals={'equals'}>
        =
      </WideKey>
    </div>
  )
}

export default Keyboard
