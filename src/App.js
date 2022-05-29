import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';


import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {

      setAlert(null)
    }, 800);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');

      document.body.style.backgroundColor = '#042743';

      showAlert("Dark mode has been enabled", "success");


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "success");

    }
  }


  // router function

  return (
    <>

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;


