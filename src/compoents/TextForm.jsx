import React, {useState} from 'react'

function TextForm(props) {
    let [text, setText] = useState("");

    let toUpCaseConvert = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    let toLoCaseConvert = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    let toClear = () => {
        let newText ='';
        setText(newText);
    }

    let textHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'  >
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{
                backgroundColor: props.mode === 'dark' ? '#4a4a4a' : '#fff',
                color: props.mode === 'dark' ? '#fff' : '#000',
                }} 
                value={text} onChange={textHandler} id="exampleFormControlTextarea1" rows="8"placeholder='Write the text'></textarea>
            </div>
            <button className='btn btn-primary' onClick={toUpCaseConvert}>Change to Upper Case</button>
            <button className='btn btn-primary mx-2' onClick={toLoCaseConvert}>Change to Lower Case</button>
            <button className='btn btn-primary' onClick={toClear}>Clear</button>
            <h2 className='my-3'>Text summary</h2>
            <p>{text.split(' ').length} numbers of words and {text.length} numbers of letters are in the text.</p>
            <h2 className='my-3'>Preview</h2>
            <p>{text === ''? "Write something to see the text" : text}</p>
        </div>
        </>
    )
}

export default TextForm