import React from 'react'

const TestA=({name="",setName})=>{
    return(<>
        <h1>The naem is : {name}</h1>
         <input
         type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         
         />
        
        </>
   
   
    )
}

export default TestA