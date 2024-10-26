/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from 'react'

function UseReducerArabic() {
  const initialValue = 0

  const reducer = (state, action) => {
    switch (action.type) {
      case 'plus':
        return state + 1
      case 'moins':
        return state - 1
      case 'reset':
        return 0
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <button className="btn btn-success m-2" onClick={() => dispatch({ type: 'plus' })}>+</button>
        <button className="btn btn-danger m-2" onClick={() => dispatch({ type: 'moins' })}>-</button>
        <button className="btn btn-primary m-2" onClick={() => dispatch({ type: 'reset' })}>0</button>
        <h1>{state}</h1>
      </div>
    </div>
  )
}
export default UseReducerArabic
