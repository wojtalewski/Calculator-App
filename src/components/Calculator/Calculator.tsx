import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'

const Calculator: React.FC = ({ children }) => {
  const { theme } = useContext(CalculatorContext)

  return (
    <div className={`calculator calculator-${theme}`}>
      <div className='container'>{children}</div>
    </div>
  )
}

export default Calculator
