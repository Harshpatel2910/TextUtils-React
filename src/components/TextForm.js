import React, { useState } from 'react'





export default function TextForm(props) {

    const handleupClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handlelowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }



    const listenText = () => {

        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    const deleteText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Deleted Successfully", "success")
    }

    const wordLength = (text) => {



        return text.length > 0 ? text.trim().split(/\s+/).length : 0;
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);

    }


    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary max-1 my-1" onClick={handleupClick}>Covert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Covert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={listenText}>Listen Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={deleteText}>Delete</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h2>Your summary</h2>
                <p>{wordLength(text)} words, {text.length} characters</p>
                <p>{0.008 * wordLength(text)} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to preview" : text}</p>
            </div>
        </>
    )
}
