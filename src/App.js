import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';


import About from './components/About';
import {
  BrowserRouter as Router,
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
    }, 1500);
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
  function AppRoutes() {
    const routes = useRoutes(
      [
        {  path: '/', element: <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} /> },
        { path: '/about', element: <About /> }
      ]
    )
    return routes;
  }
  return (
    <>

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert}></Alert>
        <div className="container my-3" >
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
