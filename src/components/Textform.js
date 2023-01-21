import React, {useState} from 'react'

export default function Textform(props) {
    
    const[text, setText] = useState("")

    const handleUpClick = ()=>{
        //console.log("button was clicked")
        let newText= text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText= text.toLowerCase()
        setText(newText)
    }

    const clearOnClick = ()=>{
        setText("")
    }

    const handleOnChange = (event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>          
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id ="myBox" rows="8" placeholder="Type here..."></textarea>
                </div>
                <p>Words : {text.trim().split(" ").length} <br/> Characters : {text.trim().length}</p>
                <hr/>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-success  my-2" onClick={clearOnClick}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h2>Preview :</h2>
                <p><em>{text}</em></p>
            </div>
        </>
    )
}
