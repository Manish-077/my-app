import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(" " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleloClick = () => {
        console.log(" " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

   const handleCopy = () =>{
    var newtext = document.getElementById("My Box");
    newtext.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard!","success");

   }

   const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText( newtext.join(" "));
    props.showAlert("Remove Extra Spaces!","success");

   }


    const [text, setText] = useState('');
    //setText("new text");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1  >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="My Box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2"  onClick={handleloClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Spaces</button>



        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text summary </h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to in the textbox above preview it here"}</p>
        </div>
        </>
    )
}
