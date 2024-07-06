import React ,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("enter text her2");
    const [gmail,setGmail] = useState("enter gmail here");
    //here useState is a hook ..
    //u need to use updation function to change here
    //text is a state variable uske default value is enter text here and 
   // text = 'new text' this is wrong way to change the state
   //correct way is to use setText
   // setText("hii")
    
    const handleUpClick = ()=>{
        console.log("upper case was cliclked");
        props.showAlert("Converted to upperCase","success");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("lower case was cliclked");
        props.showAlert("Converted to lowerCase","success");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        console.log("clear case was cliclked");
        props.showAlert("Text cleared","success");
        let newText = "";
        setText(newText);
    }
    const handleFilterClick = ()=>{
        props.showAlert("Gmails are filtered","success");
        console.log("Filter was cliclked");
       const emailRegex =  "[a-zA-Z0-9]([a-zA-Z0-9_.]*)@([a-zA-Z0-9]+)([.][a-zA-Z]+)+";
       const foundEmails = text.match(emailRegex);
       if(foundEmails){
        const filteredGmail = foundEmails.join(",");
        setGmail(filteredGmail);
       }
       else
       setGmail("no gmail found");
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        props.showAlert("Text is copied","success");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className = 'container'  style={{color:(props.mode=='dark'?'white':'black')}}>
        <h1>{props.heading}-</h1>
        <div className="mb-3">
           
            <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange} style={{backgroundColor:(props.mode==='dark'?'grey':'white'),color:(props.mode=='dark'?'white':'black')}}></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary" onClick={handleFilterClick}>Find Gmail ids</button>
    </div>
    <div className="container my-4" style={{color:(props.mode==='dark'?'white':'black')}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length}</p>
       
        <p>{0.008 * text.split(' ').length}Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
        
    </div>
    <div className="container mb-3" style={{color:(props.mode==='dark'?'white':'black')}}>
            <h3>Analyzed Gmail</h3>
            <textarea value = {gmail} style={{backgroundColor:(props.mode==='dark'?'grey':'white'),color:(props.mode=='dark'?'white':'black')}}></textarea>
        </div>
    </>
  )
}



//what are the things we want to filter out
//1.phone numbers
//2.gmail
