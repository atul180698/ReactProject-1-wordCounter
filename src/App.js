// import logo from './logo.svg';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const[screenMode, setScreenMode] = useState("light")

  const[alert, setAlert] = useState(null)

  const showAlert = (alertMessage, alertType)=>{
    setAlert({
      message: alertMessage,
      type: alertType
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleDarkMode= ()=>{
    if (screenMode==="light"){
      setScreenMode("dark")
      document.body.style.backgroundColor = "#07071c"
      showAlert("Dark Mode Enabled!","success")
    }else{
      setScreenMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark Mode Disabled!","success")
    }
  }

  return (
    <div>
      <Navbar home="Home" mode={screenMode} toggleMode={toggleDarkMode}/>
      <Alert alertBar={alert}/>
      <div className="container my-3">
        <Textform heading="Enter Your Text Below :" mode={screenMode} alertForButtons={showAlert}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
