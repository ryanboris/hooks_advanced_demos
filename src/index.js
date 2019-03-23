import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  const [state, setState] = useState({ count: 0, text: '' })

  const increment = () => setState({ ...state, count: state.count + 1 })

  const decrement = () => setState({ ...state, count: state.count - 1 })

  const reset = () => setState({ ...state, count: 0 })

  const handleTextChange = e => setState({ ...state, text: e.target.value })

  return (
    <div>
      <p>
        The current {state.text || 'count'} is {state.count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
      <input value={state.text} onChange={handleTextChange} />
    </div>
  )
}

App.defaultProps = {
  count: 10
}

ReactDOM.render(<App />, document.getElementById('root'))
