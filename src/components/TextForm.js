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



        return text.length > 0 ? text.trim().split(" ").length : 0;
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);

    }


    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleupClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={listenText}>Listen Text</button>
                <button className="btn btn-danger mx-2" onClick={deleteText}>Delete</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h2>Your summary</h2>
                <p>{wordLength(text)} words, {text.length} characters</p>
                <p>{0.008 * wordLength(text)} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter something to preview it here" : text}</p>
            </div>
        </>
    )
}
