import React,{useState} from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState("Enter Here")
  
  const handleOnChange=(event)=>{
   
    setText(event.target.value)

  }
  const handleUpClick=()=>{
    // console.log("UpperCase btn clicked",Text);
    let newtxt=Text.toUpperCase();
    setText(newtxt)
    
  }
  const handleLowClick=()=>{
    // console.log("UpperCase btn clicked",Text);
    let newtxt=Text.toLowerCase();
    setText(newtxt)
    
  }
  const handleClearClick=()=>{
    let newtxt="";
    setText(newtxt)
    
  }
  return (
<>
    <div className={`container`}>
      <h1>{props.heading}</h1>
      <div className={`mb-3  `}>
       <textarea  className={`Form-control outline-success `} id="myBox" cols="50"rows="15"  value={Text} onChange={handleOnChange}></textarea>
      </div>
    <button className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-outline-danger mx-2 my-1" onClick={handleLowClick} >Convert to Lower Case</button>
    <button className="btn btn-outline-danger mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
   <div className="container my-3">
    <h1>Your Text summary</h1>
    <p>{Text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {Text.length} characters</p>
    <p>{0.08*Text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{Text}</p>
   </div>
   </div>
   </>
  )
}
