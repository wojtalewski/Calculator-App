import { useContext } from 'react'
import CalculatorContext from '../../context/CalculatorContext'

const Header = () => {
  const { theme, dispatch } = useContext(CalculatorContext)

  const setTheme = (e) => {
    dispatch({ type: 'SET_THEME', payload: e.target.value })
    localStorage.setItem('theme', e.target.value)
  }

  return (
    <header className={`header header-${theme}`}>
      calc
      <div className={`toggle-group toggle-group-${theme}`}>
        <p>Theme</p>
        <form className='form-group'>
          <div className='input-group'>
            <label htmlFor='checkbox'>1</label>
            <input
              type='radio'
              checked={theme === 'theme-one' ? true : false}
              value='theme-one'
              onChange={setTheme}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='checkbox'>2</label>
            <input
              type='radio'
              checked={theme === 'theme-two' ? true : false}
              value='theme-two'
              onChange={setTheme}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='checkbox'>3</label>
            <input
              type='radio'
              checked={theme === 'theme-three' ? true : false}
              value='theme-three'
              onChange={setTheme}
            />
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
