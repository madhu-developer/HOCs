import React from 'react'
import Hoc from './Hoc'

const Comp1 = (props) => {

  return (
    <div>
        <button onClick={props.handleCount}>Clicked {props.count} times</button>
    </div>
  )
}

export default Hoc(Comp1,10);