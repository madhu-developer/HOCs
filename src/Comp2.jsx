import React from 'react'
import Hoc from './Hoc';

const Comp2 = (props) => {

  return (
    <div>
        <button onMouseEnter={props.handleCount}>Clicked {props.count} times</button>
    </div>
  )
}

export default Hoc(Comp2,5);