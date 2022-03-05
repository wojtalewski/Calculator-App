import React from 'react'

import { CalculatorProvider } from './context/CalculatorContext'

import Calculator from './components/Calculator/Calculator'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  return (
    <CalculatorProvider>
      <Calculator>
        <Header />
        <Display />
        <Keyboard />
      </Calculator>
    </CalculatorProvider>
  )
}

export default App
