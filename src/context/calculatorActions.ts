// Calculate value

export const calculate = (
  currentValue: string,
  prevValue: string,
  action: string
) => {
  const num1 = +currentValue.replace(',', '.')
  const num2 = +prevValue.replace(',', '.')

  let result

  const divideError = "You can't divide by 0!"

  if (action === '+') {
    result = num1 + num2
  } else if (action === '-') {
    result = num2 - num1
  } else if (action === '*') {
    result = num2 * num1
  } else if (action === '/' && num1 === 0) {
    throw new Error(divideError)
  } else {
    result = num2 / num1
  }

  result = +result.toFixed(10) * 1

  return result.toString().replace('.', ',')
}

export const dispatchAction = (
  currentValue: string,
  prevValue: string,
  action: string,
  value: string,
  dispatch: Function
) => {
  switch (value) {
    case 'Delete':
      return dispatch({ type: 'DELETE' })
    case 'Escape':
      return dispatch({ type: 'CLEAR' })
    case 'Enter':
      try {
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
      } catch (error) {
        dispatch({ type: 'SET_DISABLED', payload: true })
        dispatch({ type: 'CLEAR' })
        dispatch({
          type: 'SET_VALUE',
          payload: error,
        })
        setTimeout(() => {
          dispatch({ type: 'CLEAR' })
          dispatch({ type: 'SET_DISABLED', payload: false })
        }, 2000)
      }
      break
    case '+':
    case '-':
    case '*':
    case '/':
      try {
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
      } catch (error) {
        dispatch({ type: 'SET_DISABLED', payload: true })
        dispatch({ type: 'CLEAR' })
        dispatch({
          type: 'SET_VALUE',
          payload: error,
        })
        setTimeout(() => {
          dispatch({ type: 'CLEAR' })
          dispatch({ type: 'SET_DISABLED', payload: false })
        }, 2000)
      }
      break
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
