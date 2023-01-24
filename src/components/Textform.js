import React, {useState} from 'react'

export default function Textform(props) {
    
    const[text, setText] = useState("")

    const wordCount = () => {
        return text.split(" ").filter(a => a.trim()).length;
    };

    const characterCount = () => {
        return text.split("").filter(a => a.trim()).length;
    };

    const handleUpClick = ()=>{
        if (text.trim().length>0){
            let newText= text.toUpperCase()
            setText(newText)
            props.alertForButtons("Converted To Upper Case!","success")
        }else{
            props.alertForButtons("Please Type Something!","warning")
        } 
    }

    const handleLoClick = ()=>{
        if (text.trim().length>0){
            let newText= text.toLowerCase()
            setText(newText)
            props.alertForButtons("Converted To Lower Case!","success")
        }else{
            props.alertForButtons("Please Type Something!","warning")
        }
    }

    const clearOnClick = ()=>{
        setText("")
        if (text.trim().length>0){
            props.alertForButtons("Text Cleared!","success") 
        }else{
            props.alertForButtons("There Is No Text!","warning")
        }
               
    }

    const handleCopy = ()=>{
        if (text.trim().length>0){
            let text = document.getElementById("myBox")
            text.select()
            navigator.clipboard.writeText(text.value)
            props.alertForButtons("Copied To Clipboard!","success")
        }else{
            props.alertForButtons("No Text To Copy!","warning")
        }    
    }

    const handleSpaces = ()=>{
        if (text.trim().length>0){
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.alertForButtons("Extra Spaces Removed!","success")   
        }else{
            setText("")
            props.alertForButtons("There Is No Text!","warning")
        } 
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>          
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#071738":"#e3f2fd", color: props.mode==="dark"?"white":"black"}} id ="myBox" rows="11"></textarea>
                </div>
                <p><strong>Words :</strong> {wordCount()} &nbsp;<strong> Characters :</strong> {characterCount()}</p>

                <div className="row">
                    <div className="col d-flex flex-wrap">
                        <button className="btn btn-primary my-2 flex-fill" onClick={handleUpClick}>Convert To Uppercase</button>
                    </div>
                    <div className="col d-flex flex-wrap">
                        <button className="btn btn-primary my-2 flex-fill" onClick={handleLoClick}>Convert To Lowercase</button>
                    </div>
                    <div className="col d-flex flex-wrap">
                        <button className="btn btn-primary my-2 flex-fill" onClick={handleCopy}>Copy Text</button>
                    </div>
                    <div className="col d-flex flex-wrap">
                        <button className="btn btn-primary my-2 flex-fill" onClick={handleSpaces}>Remove Extra Spaces</button>
                    </div>
                    <div className="col d-flex flex-wrap">
                        <button className="btn btn-primary my-2 flex-fill" onClick={clearOnClick}>Clear Text</button>
                    </div>
                </div>  
            </div>

            <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
                <h2>Preview :</h2>
                <p><em>{text.trim().length>0?text:"Enter your text above to preview it here."}</em></p>
            </div>
        </>
    )
}
