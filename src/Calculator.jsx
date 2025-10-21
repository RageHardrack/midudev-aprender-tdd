import { useState } from 'react'
import { evaluate } from 'mathjs'

export const operations = ['+', '-', '*', '/']
const equalSign = '='

export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = (op) => () => setValue(value.concat(op))

  return (
    <div>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map((number) => (
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>
            ))}
          </div>
        ))}

        {operations.map((operation) => (
          <button onClick={createHandleClick(operation)} key={operation}>
            {operation}
          </button>
        ))}

        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </div>
  )
}
