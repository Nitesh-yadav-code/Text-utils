import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase is clicked " + text);
    let newText  = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const clearText = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text is Cleared!", "success")
  };

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipbord!", "success") 
  }
  const removeExtraSpaces =()=>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra Space removed!", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
      <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
        <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} style={{background: props.mode=== 'dark'?'#042743':'white', 
          color: props.mode=== 'dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8 " ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={clearText}> Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}> Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter Something in the textbox above to privew it here"}</p>
    </div>

    </>
  );
}
