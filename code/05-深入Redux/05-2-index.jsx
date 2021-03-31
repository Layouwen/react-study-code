import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './05-2-App'
import { createStore } from 'redux'

const stateChanger = (state, action) => {
  if (state === undefined) {
    return 0
  } else {
    if (action.type === 'add') {
      var newState = state + action.payload
      return newState
    } else {
      return state
    }
  }
  return newState
}

const store = createStore(stateChanger)

function addIf() {
  let oldState = store.getState()
  if (oldState % 2 === 1) {
    store.dispatch({ type: 'add', payload: 1 })
  }
}

function addSync() {
  setTimeout(() => {
    store.dispatch({ type: 'add', payload: 1 })
  }, 2000)
}

render()

store.subscribe(render)

function render() {
  ReactDOM.render(
    <App
      value={store.getState()}
      onAdd1={() => {
        store.dispatch({ type: 'add', payload: 1 })
      }}
      onAdd2={() => {
        store.dispatch({ type: 'add', payload: 2 })
      }}
      onAddIf={addIf}
      onAddAsync={addSync}
    />,
    document.getElementById('root')
  )
}
