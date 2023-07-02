import React from 'react'

const Form = ({yourName,setYourName,crushName,setCrushName,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        
        <input 
        type='text'
        required
        placeholder='Your Name'
        value={yourName}
        onChange={(e)=>setYourName(e.target.value)}/>
        <br></br>
        <input 
        type='text'
        required
        placeholder='Crush Name'
        value={crushName}
        onChange={(e)=>setCrushName(e.target.value)}/>
        <br></br>
        <button type='submit'>❤ CALCULATE ❤</button>
    </form>
  )
}

export default Form