import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'

const Display: React.FC = () => {
  const { theme, currentValue, prevValue, action } =
    useContext(CalculatorContext)

  return (
    <div className={`display display-${theme}`}>
      {prevValue.length > 0 ? (
        <div className='prevValue'>
          {prevValue} {action}
        </div>
      ) : (
        <div className='prevValue'></div>
      )}

      <div
        className={
          currentValue.length > 10
            ? 'currentValue currentValue-small'
            : 'currentValue'
        }
      >
        {currentValue !== '' ? currentValue : 0}
      </div>
    </div>
  )
}

export default Display
