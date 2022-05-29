import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';


import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRoutes,
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

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert}></Alert>
        <div className="container my-3" >
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
