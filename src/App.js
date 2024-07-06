
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


let name = "sathwik";
function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
        //this is an object
      }
     
    )
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#df9191';
      showAlert("Dark mode has been enabled","success");
    }
    
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");


    }
    
  }
  return (
    <>
   <Router>
      <Navbar title='TextUtils' aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
