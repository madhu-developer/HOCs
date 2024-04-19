import React, { useState } from 'react'

// const Hoc = (OriginalComp) => {
//   const NewComp = ()=>{
//     const [ count, setCount] = useState(0);
//     const handleCount = () =>{
//         setCount(count+1)
//     }
//     return <OriginalComp count={count} handleCount={handleCount}/>
//   }
//   return NewComp;
// }
// export default Hoc

const Hoc = (OriginalComp,increment)=>{
    const NewComp = ()=>{
        const [ count, setCount] = useState(0);
        const handleCount = () =>{
            setCount(count+increment)
     }
     return <OriginalComp count={count} handleCount = {handleCount}/>
    }
    return NewComp
}

export default Hoc