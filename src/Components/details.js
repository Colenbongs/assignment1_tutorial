
import {useState} from 'react'
import Card from './Card'

function Details() {
  const [card, setCard] = useState("")
  const [number, setnumber] = useState("")
  const [expiresYear, setCardExpiresYear] = useState("")
  const [expiresMonth, setCardExpiresMonth] = useState("")
  const [cvcNum, setCvv] = useState("")
  const [message, setMessage] = useState("");
  const handlenumber = (e) =>{
    setnumber(e.target.value)
  }

  const submitInfo = () =>{
    if(card === "" || number === "" || expiresMonth === "" || expiresYear === "" || cvcNum === ""){
      setMessage("Please fill all the required fields")
    }
    else if(number.length !== 16 || /^[0-9]+$/.test(number) === false ){
      setMessage("Card number should be 16 non-negative values")
    }
    else if(/^[0-9]+$/.test(cvcNum) === false){
      setMessage("A valid CVVNum number is a non negative value")
    }
    else{
      setMessage("Success!")
    }
  }

  return (
    <>
    
   
    <div className="row">
      <h2>{message}</h2>
      <div>
          <label for="name"> Card Name</label>
          <input 
          
          id="name" 
          type="text"
          className="form-control" 
          placeholder="Enter your name" 
          onChange={(e)=>setCard(e.target.value)}/>
          
          <label For="ccnumber">Card Number</label>
          <input type="text" className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
          placeholder="#### #### #### ####"  onChange={(e)=>handlenumber(e)}/>
          
          <select onChange= {(e)=>setCardExpiresMonth(e.target.value)}>

          <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
           
          </select>
         
          <label For="cvcNum">Year</label>
          <select onChange= {(e)=>setCardExpiresYear(e.target.value)} id="ccyear">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
          </select>
          <label For="cvvNum">CVVNum</label>

          <input onChange= {(e)=>setCvv(e.target.value)} maxlength="3"  
          pattern="\d{3}"  id="cvvNum" type="text" placeholder={123} />  

          <button onClick={submitInfo} type="submit" color="success">Submit</button>  
          
          <div clasName="rccs__card rccs__card--unknown">
      <div className="">
      <Card name={card} 
      number={number} 
      Year={expiresYear}
       month={expiresMonth}
       cvc={cvcNum}/>
       </div>
    </div>
           
    </div>
  
    </div>
    </>
)
}

export default Details;
