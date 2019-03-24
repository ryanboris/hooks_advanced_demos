import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  const reset = () => setCount(0)

  const handleTextChange = e => setText(e.target.value)

  useEffect(() => {
    console.log('this should only run once!!!!')
  }, [])

  useEffect(() => {
    console.log('the second useEffect runs when the count changes')
    document.title = count
  }, [count])

  return (
    <div>
      <p>
        The current {text || 'count'} is {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
      <input value={text} onChange={handleTextChange} />
    </div>
  )
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App />, document.getElementById('root'))
