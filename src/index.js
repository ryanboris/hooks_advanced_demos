import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  const [count, setCount] = useState(props.count)

  const increment = () => setCount(prevCount => prevCount + 1)

  const decrement = () => setCount(prevCount => prevCount - 1)

  const reset = () => setCount(0)

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
    </div>
  )
}

App.defaultProps = {
  count: 10
}

ReactDOM.render(<App />, document.getElementById('root'))
