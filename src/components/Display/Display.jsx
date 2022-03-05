import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'

const Display = () => {
  const { theme, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  return (
    <div className={`display display-${theme}`}>
      {prevValue.length > 0 ? (
        <p className='prevValue'>
          {prevValue} {action}
        </p>
      ) : (
        <p className='prevValue'>{''}</p>
      )}
      <p
        className={
          currentValue.length > 15
            ? 'currentValue currentValue-small'
            : 'currentValue'
        }
      >
        {currentValue.length > 0 ? currentValue : 0}
      </p>
    </div>
  )
}

export default Display
