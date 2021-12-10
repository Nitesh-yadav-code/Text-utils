import React, { useState } from 'react'

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled", "success")
    }else{
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
      <Navbar title= "TextUtils" Home= "Home" mode = {mode} toggleMode = {toggleMode} />
      <Alert Alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
             <TextForm heading = "Enter The text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
