import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
  const counter = useSelector(state =>state.counter)
  const islogged = useSelector(state =>state.islogged)
  return (
    <div>
        <h1>Counter {counter}</h1>
        <h1>Islogged {islogged}</h1>
    </div>
  )
}
