import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
//import axios from 'axios';
//import apiRequest from './components/apiRequest';
function App() {
  const [yourName,setYourName]=useState('')
  const[crushName,setCrushName]=useState('')
  const [fName,setfName]=useState('')
  const[sName,setsName]=useState('')
  const[result,setResult]=useState('')
  const[isLoading,setIsLoading]=useState(false)
  const [percentage,setPercentage]= useState('')
 // const API_URL='https://love-calculator.p.rapidapi.com/getPercentage';
  const handleSubmit=(e) =>{
      const male=yourName.toLocaleUpperCase()
     const female= crushName.toLocaleUpperCase()
    e.preventDefault()
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '55140521cdmsh851169902e01c62p1bcf74jsna58f57fc75eb',
    //       'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    //    }
    // };

    // try {
    //   const reqURL=`${API_URL}?sname=${yourName}&fname=${crushName}`
	  //   const response = await apiRequest(reqURL,options);
	  //   console.log(response);
    // } catch (error) {
	  //   console.error(error);
    // }

    fetch(
      "https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
        male +
        "&sname=" +
        female,
       
      {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '55140521cdmsh851169902e01c62p1bcf74jsna58f57fc75eb',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data.result)
        setPercentage(data.percentage)
        setfName(data.fname)
        setsName(data.sname)
        setIsLoading(true)
      })
      .catch((err) => {
        console.error(err);
      });
      //.finally(setIsLoading(true));
  
  
  
  }
  return (
    <div className="App">
        <div className='heading'>
          <h1>Love ♥ Calculator</h1>
          <h4>Get Your Own Love Result Instantly*</h4>
        </div>
        
        
        <Form 
        yourName={yourName}
        setYourName={setYourName}
        crushName={crushName}
        setCrushName={setCrushName}
        handleSubmit={handleSubmit}
        />
     {isLoading &&  <Display result={result}
      percentage={percentage}
      yourName={fName}
      crushName={sName}/> }
     
      
    </div>
  );
}

export default App;
