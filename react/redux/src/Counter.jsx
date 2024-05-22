import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncreaseBy10, Increment } from './redux/Counter'

function Counter() {
    let count=useSelector((state)=>state.counter.value)    
    let dispatch=useDispatch() 
  return (
    <div>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(IncreaseBy10(10))}>
            Increment by 10
        </button>

        <p>{count}</p> 
        <button>Decrement</button>
    </div>
  )
}

export default Counter