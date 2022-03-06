// Calculate value
export const calculate = (currentValue, prevValue, action) => {
  const num1 = +currentValue.replace(',', '.')
  const num2 = +prevValue.replace(',', '.')

  let result

  if (action === '+') {
    result = num1 + num2
  } else if (action === '-') {
    result = num2 - num1
  } else if (action === '*') {
    result = num2 * num1
  } else if (action === '/' && num1 === 0) {
    result = "You can't divide by 0!"
  } else {
    result = num2 / num1
  }

  if (result !== "You can't divide by 0!") {
    result = result.toFixed(10) * 1
  }

  return result.toString().replace('.', ',')
}

export const dispatchAction = (
  currentValue,
  prevValue,
  action,
  value,
  dispatch
) => {
  switch (value) {
    case 'Delete':
      return dispatch({ type: 'DELETE' })
    case 'Escape':
      return dispatch({ type: 'CLEAR' })
    case 'Enter':
      if (prevValue !== '') {
        const calculatedValue = calculate(currentValue, prevValue, action)
        dispatch({ type: 'CLEAR' })
        dispatch({
          type: 'SET_VALUE',
          payload: calculatedValue,
        })
        dispatch({ type: 'SET_PREV_VALUE', payload: '' })
        dispatch({ type: 'SET_ACTION', payload: '=' })
      } else {
        dispatch({ type: 'SET_PREV_VALUE', payload: '' })
        dispatch({ type: 'SET_ACTION', payload: '=' })
      }
      break
    case '+':
    case '-':
    case '*':
    case '/':
      if (prevValue !== '') {
        const calculatedValue = calculate(currentValue, prevValue, action)
        dispatch({ type: 'SET_PREV_VALUE', payload: calculatedValue })
        dispatch({ type: 'SET_ACTION', payload: value })
        dispatch({ type: 'DELETE' })
      } else if (prevValue === '') {
        dispatch({ type: 'SET_PREV_VALUE', payload: currentValue })
      }

      dispatch({ type: 'SET_ACTION', payload: value })
      return dispatch({ type: 'DELETE' })
    case '0':
      if (currentValue !== '') {
        return dispatch({ type: 'SET_VALUE', payload: value })
      }
      break
    case ',':
      if (currentValue === '') {
        dispatch({ type: 'SET_VALUE', payload: '0,' })
      } else if (!currentValue.endsWith(',')) {
        dispatch({ type: 'SET_VALUE', payload: value })
      }
      break
    default:
      if (action === '=') {
        dispatch({ type: 'DELETE' })
        dispatch({ type: 'SET_ACTION', payload: '' })
      }

      if (currentValue.length < 16) {
        return dispatch({ type: 'SET_VALUE', payload: value })
      }
  }
}

export default dispatchAction
