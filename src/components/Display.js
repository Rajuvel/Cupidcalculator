import React from 'react'

const Display = ({result,percentage,yourName,crushName}) => {
    
  return (
    <display>
        <h1>{yourName} and {crushName}</h1>
        <h2> Love Percentage:<b style={{color:"red"}}> {percentage}%</b> </h2>
        <h4>Result: {result}</h4>
        {percentage>90 ?<h2 id="loveinfo"><b style={{color:"#C69162ff"}}>{yourName}</b> and <b style={{color:"#F5D7BCff"}}>{crushName}</b>  love each other like glue. Nothing can seperate you from each other. Love is Forever.</h2>:percentage>75?<h2 id="loveinfo"><b style={{color:"#C69162ff"}}>{yourName}</b> and <b style={{color:"#F5D7BCff"}}>{crushName}</b>  love each other more than anything in the world! You are the best example of true love.</h2>:percentage>=50?<h2 id="loveinfo"><b style={{color:"#C69162ff"}}>{yourName}</b> and <b style={{color:"#F5D7BCff"}}>{crushName}</b>  love each other like Soil & Seed. You should take care of your  love more!</h2>:<h2 id="loveinfo"><b style={{color:"#C69162ff"}}>{yourName}</b> and <b style={{color:"#F5D7BCff"}}>{crushName}</b>  love each other like Oil & Water. I'm sorry, but this is not enough for a perfect relationship.</h2>}
        
        
        
        
    </display>
   
  )
}

export default Display