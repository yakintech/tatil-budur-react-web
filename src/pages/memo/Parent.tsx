import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent() {

    const [counter, setcounter] = useState(0)

  return (<>
    <div>Parent</div>
    <button onClick={() => setcounter(counter + 1)}>+</button>
    <button onClick={() => setcounter(counter - 1)}>-</button>
    <div>{counter}</div>

    <hr />
    <Child />
    <Child2/>
  </>
  )
}

export default Parent