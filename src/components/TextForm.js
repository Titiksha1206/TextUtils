import { clear } from "@testing-library/user-event/dist/clear";
import React , {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked - " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "Success")
  }
  const handleLoClick = ()=>{
    console.log("lowercase was clicked - " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "Success")
  }
  const handleToggle = ()=>{
    setShow(!show);
    props.showAlert("Toggling Preview!", "Success")
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleClear = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "Success")
 }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "Success")
  }
  const handleExtraSpaces = ()=>{
   let newText = text.split(/[ ]+/); // regex concept.
   setText(newText.join(" "))
   props.showAlert("Extra Spaces are Removed!", "Success")
  }
  const [text, setText] = useState('');
  const [show, setShow] = useState(true);
 

  return (
    <>
    <div className="container" style={{ color: props.mode === "dark"? "white":"black"}} >
     <h1 className = " my-2"><b> {props.heading} </b></h1> 
     <p>Any problem with Text, Here is the Solution.</p>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "grey":"white",
      color: props.mode === "dark"? "white":"black"
     }} id="myBox" rows="8">     
      </textarea>
     </div>  
    </div>
    <div style={{ color: props.mode === "dark"? "white":"black"}}>
      {
        show?<h1> preview</h1>:null}
        {
        show?<p> {text}</p>:null
      }
      </div>
      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleUpClick}> convert to uppercase</button>

      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleLoClick}> convert to lowercase</button>

      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleClear}> clear </button>

      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleToggle}> toggle </button>

      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleCopy}> Copy </button>

      <button disabled={text.length===0} className="btnbtnprimary mx-2" onClick={handleExtraSpaces}> handle Extra Spaces </button> 

    <div className="container2 my-3" style={{ color: props.mode === "dark"? "white":"black",
    //  border:  props.mode === "dark" ? "solid white 3px":"solid black 3px"
  }}>
      <h1><u>Your Text Summary</u></h1>
      <div className="abovefoot">
      <ul>
      <li>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Words </li>
      <li>{text.length} Characters </li>
      </ul>
      </div>
      </div>
    
    </>
  );
}
