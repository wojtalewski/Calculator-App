// Calculate value
const calculate = (currentValue, prevValue, action) => {
  const num1 = +currentValue.replace(',', '.')
  const num2 = +prevValue.replace(',', '.')

  console.log(num1)
  console.log(num2)

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

export default calculate
